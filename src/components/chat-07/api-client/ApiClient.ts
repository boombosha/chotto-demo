import axios from 'axios';
import { fetchEventSource } from '@microsoft/fetch-event-source';
export class ApiClient{
  axios: any;
  token: any;
  url: any;
  
  constructor(token: string){
    this.token = token
    this.url = `https://test2.services.mobilon.ru/api/v1`
    this.axios = axios.create({
      baseURL: this.url,
      headers: {
        'Accept': 'application/json', 
        Authorization: `Bearer ${token}`,
      },
    });

    this.axios.interceptors.response.use(function (response: any) {
      return response.data;
      }, function (error: any) {
        return false
       }
    ); 
  }

  /* Files */

  async getFileList(){
    const response = await this.axios.get(`/files`);
    return response
  }

  async getFileInfo(fileId: string){
    const response = await this.axios.get(`/files/${fileId}`);
    return response
  }

  async uploadFile(file: File){
    const formData = new FormData();
    formData.append('file', file)
    formData.append('purpose','general')
    console.log(formData)
    const response = await this.axios.post(`/files`,formData);
    return response
  }

  async downloadFile(fileId: string, filename: string, created_at: number){
    await this.axios
      .get(`/files/${fileId}/content`, {responseType: 'blob',})
      .then(response => {
        const file = new File([response], filename, {lastModified: created_at})
        const a = document.createElement('a')
        const url = URL.createObjectURL(file)
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
        }, 10)
      })
  }

  async deleteFile(fileId: string){
    const response = await this.axios.post(`/files/${fileId}/delete`);
    return response
  }

  /* Tokens */

  async getAvailableTokens(){
    const response = await this.axios.get(`/balance`);
    console.log(response)
    return response.balance.find(b => b.usage == 'GigaChat').value
  }

  /* Models */

  async getModels(){
    const response = await this.axios.get(`/models`)
    return response
  }

  /* Requests */

  async sendRequest(model: string, messages: object[]){
    
    const data = JSON.stringify({
      'model' : model,
      'messages' : messages,
    }, null,' ')

    const response = await this.axios.post(`/chat/completions`,data)
    return response
  }

  async sendStreamRequest(model: string, messages: object[], stream: boolean, update_interval: number|null = null){
    
    const data = JSON.stringify({
      'model' : model,
      'messages' : messages,
      'stream' : stream,
      'update_interval': update_interval,
    }, null,' ')

    const response = <string[]>[]

    await fetchEventSource(this.url + '/chat/completions',{
      method: "POST",
      headers: {
        'Accept': 'text/event-stream', 
        Authorization: `Bearer ${this.token}`,
      },
      body: data,
      //@ts-ignore
      async onmessage(ev) {
        if (ev.data != '[DONE]'){
          const data = JSON.parse(ev.data)
          const m = data.choices[0].delta.content as string
          response.push(m)
        }
      },
      onerror(err) {
        console.log("There was an error from server", err);
        return 
      },
    })
    return response
  }

}
import axios from 'axios';
import {v4} from 'uuid'

export class AuthClient{
  axios: any;

  constructor(){
    this.axios = axios.create({
      baseURL: `https://test.services.mobilon.ru/api/v2/oauth`,
    })

    this.axios.interceptors.response.use(function (response: any) {
      return response.data;
      }, function (error: any) {
        return false
       }
    ); 
  }

  async getToken(client_id: string, client_secret: string){
    const authorization = 'Basic ' + btoa(client_id + ':' + client_secret)
    const rquid = v4()

    const scope = 'GIGACHAT_API_PERS'
    console.log(this.axios)
    const response = await this.axios
      .post('',{scope: scope}, {headers: {
        authorization: authorization,
        rquid: rquid, 
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }})
    return response
  }
}
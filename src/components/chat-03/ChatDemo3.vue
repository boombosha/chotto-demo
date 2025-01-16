<script setup>
 import { onMounted } from 'vue';
 import FloatBaseChatApp from './components/FloatBaseChatApp.vue';
 import FloatFeedChatApp from './components/FloatFeedChatApp.vue';
import {
  messages, chats,
  userProfiles
} from './data';
import { useChatsStore } from '../../stores/chatsStore';

const chatsStore = useChatsStore()
// Mock data
const data3 = {
  messages,
  chats,
  userProfiles,
};

// Define the auth provider
const authProvider = {
  getUserProfile(index) { return data3.userProfiles[index] },
  setUserProfileOnline(index, online){
    if (online){
      data3.userProfiles[index].online = true
      data3.userProfiles[index].status = 'lightgreen'
    }
    else if (!online){
      data3.userProfiles[index].online = false
      data3.userProfiles[index].status = 'gray'
    }
  }
};

// Define the data provider
const dataProvider = {
  setAuth(auth) {
    console.log('auth', auth);
  },
  getFeed(chatId) {
    return data3.messages.filter(m => m.chatId === chatId);
  },
  getChats() {
    return data3.chats;
  },
  getMessages() {
    return data3.messages;
  },
  getMessagesBySearch(chatId, string){
    const messages = data3.messages.filter(m => m.chatId === chatId);
    const search = messages.filter(m => {
      if (m.text) {
        const index = m.text.indexOf(string)
        if (index != -1) return m
      }
    })
    return search
  },
  addMessage(message) {
    data3.messages.push(message);
    console.log("Добавлено новое сообщение:", message);
  },
};

onMounted(() => {
  chatsStore.messages = dataProvider.getMessages();
})
</script>

<template>
  <div class="container">
    <div class="cell11">
      <FloatFeedChatApp
        :auth-provider="authProvider"
        :data-provider="dataProvider"
        :index="0"
      />
    </div>
    <div class="cell12">
      <FloatBaseChatApp
        :auth-provider="authProvider"
        :data-provider="dataProvider"
        :index="3"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1300px;
  height: 600px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 500px 1000px;
  grid-template-rows: 500px 500px;
}

.cell11,.cell12,.cell21,.cell22{
  position: relative;
}
.cell12{
  margin-left: 50px;
}

.cell21{
  margin-top: 50px;
}
.cell22 {
  margin-top: 50px;
  margin-left: 50px;
}
</style>

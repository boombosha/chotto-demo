<script setup>
 import { onMounted } from 'vue';
 import FloatBaseChatApp from './components/FloatBaseChatApp.vue';
import {
  messages, chats,
  userProfiles, templates, channels
} from './data';
import { useChatsStore } from '../../stores/chatsStore';

const chatsStore = useChatsStore()
// Mock data
const data3 = {
  messages,
  chats,
  userProfiles,
  templates,
  channels,
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
  getFeed(chatId, dialogId) {
    return data3.messages.filter(m => (m.chatId === chatId && m.dialogId === dialogId));
  },
  getTemplates() {
    return data3.templates;
  },
  getChats() {
    return data3.chats;
  },
  getMessages() {
    return data3.messages;
  },
  getChannels() {
    return data3.channels;
  },
  addMessage(message) {
    data3.messages.push(message);
    console.log("Добавлено новое сообщение:", message);
  },
  addDialog(contact, channel, chatId) {
    const chat = data3.chats.find(c => c.chatId == chatId)
    chat.dialogs.push({
      dialogId: 'dlg_8' + Date.now(),
      icon: '',
      name: 'диалог' + (chat.dialogs.length) + ' ' + contact,
      fullname: 'диалог ' + chat.dialogs.length + ' номер' + contact + ' канал ' + channel,
      countUnread: 0,
      'lastActivity.timestamp': 1727001759111,   // для сортировки
      isSelected: false,
    })
  }
};

onMounted(() => {
  chatsStore.messages = dataProvider.getMessages();
})
</script>

<template>
  <div class="container">
    <FloatBaseChatApp
      :auth-provider="authProvider"
      :data-provider="dataProvider"
      :index="3"
    />
  </div>
</template>

<style scoped>
.container {
  width: 1300px;
  height: 600px;
  margin: 30px auto;
  position: relative;
}
</style>

<template>
  <div class="container">

    <div class="float1">
      <FloatFeedChatApp
        class="float1"
        :auth-provider="authProvider"
        :data-provider="dataProvider"
        :index="0"
        :chat="data3.chats[0]"
        @typing="handleTyping"
      />
    </div>

    <div class="float2">
      <FloatFeedChatApp
        class="float1"
        :auth-provider="authProvider"
        :data-provider="dataProvider"
        :index="1"
        :chat="data3.chats[1]"
        @typing="handleTyping"
      />
    </div>


  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import FloatFeedChatApp from './components/FloatFeedChatApp.vue';
import {
  messages, chats,
  userProfiles, templates, wabaTemplates, groupTemplates
} from './data';
import { useChatsStore } from '../../stores/chatsStore';

const chatsStore = useChatsStore()

// Mock data
const data3 = {
  messages,
  chats,
  userProfiles,
  templates,
  wabaTemplates,
  groupTemplates
};

const handleTyping = (chatId, isTyping) => {
  chatsStore.setTyping(chatId, isTyping)
};

// Define the auth provider
const authProvider = {
  getUserProfile(index) { return data3.userProfiles[index] }

};

// Define the data provider
const dataProvider = {
  setAuth(auth) {
    console.log('auth', auth);
  },
  getFeed() {
    return data3.messages;
  },
  getTemplates() {
    return data3.templates;
  },
  getWABATemplates() {
    return data3.wabaTemplates;
  },
  getGroupTemplates() {
    return data3.groupTemplates;
  },
  getChats() {
    return data3.chats;
  },
  getMessages() {
    return data3.messages;
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

<style scoped>
.container {
  position: relative;
  width: 1600px;
  height: 100vh;
  margin: 0 auto;

}

.float1 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}

.float2 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 50%;
}
</style>

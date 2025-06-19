<script setup>
import { ref } from 'vue';
import ChatDemo0 from './components/chat-00/ChatDemo0.vue';
import ChatDemo1 from './components/chat-01/ChatDemo1.vue';
import ChatDemo2 from './components/chat-02/ChatDemo2.vue';
import ChatDemo3 from './components/chat-03/ChatDemo3.vue';
import ChatDemo4 from './components/chat-04/ChatDemo4.vue';
import ChatDemo5 from './components/chat-05/ChatDemo5.vue';
import ChatDemo6 from './components/chat-06/ChatDemo6.vue';
import ChatDemo7 from './components/chat-07/ChatDemo7.vue';
import ChatDemo8 from './components/chat-08/ChatDemo8.vue';
import ChatDemo9 from './components/chat-09/ChatDemo9.vue';
import { ButtonContextMenu } from '@mobilon-dev/chotto';

const chats = [
  {
    index: 0,
    title: 'Chat00',
    name: 'Chat00 - two persons chat demo',
  },
  {
    index: 1,
    title: 'Chat01',
    name: 'Chat01 - conversation 3 to 1 demo',
  },
  {
    index: 2,
    title: 'Chat02',
    name: 'Chat02 - waba templates demo',
  },
  {
    index: 3,
    title: 'Chat03',
    name: 'Chat03 - messages search in chat',
  },
  {
    index: 4,
    title: 'Chat04',
    name: 'Chat04 - adaptive to container size extended layout',
  },
  {
    index: 5,
    title: 'Chat05',
    name: 'Chat05 - chat multidialog system',
  },
  {
    index: 6,
    title: 'Chat06',
    name: 'Chat06 - audio and video recording',
  },
  {
    index: 7,
    title: 'Chat07',
    name: 'Chat07 - GigaChat conversation',
  },
  {
    index: 8,
    title: 'Chat08',
    name: 'Chat08 - re-styling by user`s conditions',
  },
  {
    index: 9,
    title: 'Chat09',
    name: 'Chat09 - custom placeholders',
  },
]

const currentChat = ref(chats[9].index)
const currentName = ref(chats[9].name)
const componentsMap = (index) => {
  const r = [
    ChatDemo0,
    ChatDemo1, 
    ChatDemo2, 
    ChatDemo3, 
    ChatDemo4, 
    ChatDemo5, 
    ChatDemo6,
    ChatDemo7, 
    ChatDemo8,
    ChatDemo9,
  ]
  return r[index];
}


const handleClick = (action) => {
  currentChat.value = action.index
  currentName.value = action.name
}
</script>

<template>
  <div class="toolbar" data-theme="light">
    <ButtonContextMenu 
      style="margin-left: 50px; z-index: 1001; padding: 14px;"
      :actions="chats"
      mode="hover"
      button-class="pi pi-list"
      menuSide="bottom"
      @click="handleClick"
    >
      <span class="pi pi-list"></span>
    </ButtonContextMenu>
    
    <h2 class="toolbar-title">
      {{ currentName }}
    </h2>
  </div>
  <component
    :is="componentsMap(currentChat)"
  />
</template>

<style scoped>
  .toolbar{
    height: 48px;
    display: flex;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 15px;
    background-color: lightgray;
    border-radius: 5px;
  }

  .context-menu{
    font-family: "Montserrat", sans-serif;
  }

  .toolbar-title{
    margin: 0;
    line-height: 48px;
    width: 100%;
    text-align: center;
  }
</style>

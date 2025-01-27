<script setup>
import { ref } from 'vue';
import ChatDemo0 from './components/chat-00/ChatDemo0.vue';
import ChatDemo1 from './components/chat-01/ChatDemo1.vue';
import ChatDemo2 from './components/chat-02/ChatDemo2.vue';
import ChatDemo3 from './components/chat-03/ChatDemo3.vue';
import ChatDemo4 from './components/chat-04/ChatDemo4.vue';
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
  }
]


const currentChat = ref(chats[1].index)
const currentName = ref(chats[1].name)
const componentsMap = (index) => {
  const r = [ChatDemo0, ChatDemo1, ChatDemo2, ChatDemo3, ChatDemo4]
  return r[index];
}


const handleClick = (action) => {
  currentChat.value = action.index
  currentName.value = action.name
}
</script>

<template>
  <div class="toolbar">
    <ButtonContextMenu 
      style="margin-left: 50px; z-index: 1001;"
      :actions="chats"
      mode="hover"
      button-class="pi pi-list"
      menuSide="bottom"
      @click="handleClick"
    />
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

  .toolbar-title{
    margin: 0;
    line-height: 48px;
    width: 100%;
    text-align: center;
  }
</style>

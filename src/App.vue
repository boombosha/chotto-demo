<script setup>
import { ref } from 'vue';
import ChatDemo1 from './components/chat-01/ChatDemo1.vue';
import ChatDemo2 from './components/chat-02/ChatDemo2.vue';
import { ButtonContextMenu } from '@mobilon-dev/chotto';

const chats = [
  /*{
    index: null,
    title: 'Chat00',
    name: 'Chat00 - two chats demo',
  },*/
  {
    index: 0,
    title: 'Chat01',
    name: 'Chat01 - conversation 3 to 1 demo',
  },
  {
    index: 1,
    title: 'Chat02',
    name: 'Chat02 - waba templates demo',
  }
]


const currentChat = ref(chats[1].index)
const currentName = ref(chats[1].name)
const componentsMap = (index) => {
  const r = [ChatDemo1, ChatDemo2]
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
      mode="click"
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

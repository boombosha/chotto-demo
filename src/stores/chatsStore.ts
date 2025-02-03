import { defineStore } from 'pinia';
import { ref } from 'vue';
//import { messages } from '../data';

export const useChatsStore = defineStore('chats', () => {
  // chatStore должен хранить данные чатов в таком же виде как в компоненте Chat
  const chats: any = ref([])
  const messages: any = ref([])
  function getChatById(chatId: string) {
    return chats.value.find((c: any) => c.chatId == chatId);
  }

  function getDialogById(chat: any, dialogId: string){
    return chat.dialogs.find((d: any) => d.dialogId == dialogId)
  }

  function skipUnreadCounter(chatId: string) {
    const chat = getChatById(chatId);
    if (chat) chat.countUnread = 0;
  }

  function decreaseUnreadCounter(chatId: string, num: number) {
    const chat = getChatById(chatId);
    if (chat) chat.countUnread -= num;
  }

  function increaseUnreadCounter(chatId: string, countUnread: number) {
    const chat = getChatById(chatId);
    if (chat) chat.countUnread += countUnread;
  }

  function setUnreadCounter(chatId: string, countUnread: number) {
		const chat: any = chats.value.find((c:any) => c.chatId === chatId)
		if (chat) chat.countUnread = countUnread
	}

  function setDialogUnreadCounter(chatId: string, dialogId: string, countUnread: number) {
		const chat = getChatById(chatId);
		if (chat) {
      console.log(chat)
      const dialog = getDialogById(chat, dialogId)
      console.log(dialog, dialogId, chat.dialogs)
      if (dialog){
        dialog.countUnread = countUnread
        console.log(dialog.countUnread)
      }
        
    }
	}

  function increaseDialogUnreadCounter(chatId: string, dialogId: string, countUnread: number){
    const chat = getChatById(chatId);
    if (chat) {
      chat.countUnreadOut += countUnread;
      const dialog = getDialogById(chat, dialogId)
      if (dialog)
        dialog.countUnread += countUnread
    }
  }

  function decreaseDialogUnreadCounter(chatId: string, dialogId: string, num: number) {
    const chat = getChatById(chatId);
    if (chat) {
      chat.countUnreadOut -= num;
      const dialog = getDialogById(chat, dialogId)
      if (dialog)
        dialog.countUnread -= num
    }
  }

  function setLastMessage(chatId: string, lastMessage: string) {
    const chat = getChatById(chatId);
    if (chat) chat.lastMessage = lastMessage.substring(0, 20);
  }

  function setLastActivityTime(chatId: string, lastActivityTime: string) {
    const chat = getChatById(chatId);
    if (chat) chat['lastActivity.time'] = lastActivityTime;
  }

  function setTimestamp(chatId: string, timestamp: string) {
    const chat = getChatById(chatId);
    if (chat) chat['lastActivity.timestamp'] = timestamp;
  }

  function setLastStatus(chatId: string, status: string){
    const chat = getChatById(chatId);
    if (chat) chat['lastMessage.status'] = status;
  }

  function setStatus(chatId: string, statusColor: string) {
    const chat = getChatById(chatId);
    if (chat) chat.status = statusColor;
  }

  function setTyping(chatId: string, typing: Boolean, attrs: Object) {
    const chat = getChatById(chatId);
    if (chat) {
      if (attrs){
        chat.typing = attrs
      }
      else {
        chat.typing = typing;
      }
    }
  }

  function setTypingIn(chatId: string, typing: Boolean, attrs: Object) {
    const chat = getChatById(chatId);
    if (chat) {
      if (attrs){
        chat.typingIn = attrs
      }
      else {
        chat.typingIn = typing;
      }
    }
  }

  function increaseUnreadCounterOut(chatId: string, countUnread: number){
    const chat = getChatById(chatId);
    if (chat) chat.countUnreadOut += countUnread;
  }

  function decreaseUnreadCounterOut(chatId: string, num: number) {
    const chat = getChatById(chatId);
    if (chat) chat.countUnreadOut -= num;
  }

  function setUnreadCounterOut(chatId: string, countUnread: number){
    const chat = getChatById(chatId);
    if (chat) chat.countUnreadOut = countUnread
  }

  function updateChatNewMessage(
    chatId: string,
    countUnread: number,
    lastMessage: string,
    lastActivityTime: string,
    timestamp: string,
    status: string,
  ) {
    increaseUnreadCounter(chatId, countUnread);
    setLastMessage(chatId, lastMessage);
    setLastActivityTime(chatId, lastActivityTime);
    setTimestamp(chatId, timestamp);
    setLastStatus(chatId, status);
  }

  function readMessages(chatId: string, receiverId: number){
    const chat = getChatById(chatId);
    if (chat){
      for (let message of messages.value){
        if (message.chatId == Number(chatId) && message.senderId != receiverId){
          message.status = 'read'
        }
      }
    }
  }

  function readCurrentMessage(chatId: string, message){
    const chat = getChatById(chatId);
    const target = messages.value.findIndex((m) => m.chatId == message.chatId && m.timestamp == message.timestamp)
    if (target) {
      messages.value[target].status = 'read'
      chat['lastMessage.status'] = 'read'
    }
  }

  return {
    chats,
    messages,
    increaseUnreadCounter,
    skipUnreadCounter,
    decreaseUnreadCounter,
    setLastMessage,
    setLastActivityTime,
    updateChatNewMessage,
    setStatus,
    getChatById,
    setTyping,
    setTypingIn,
    setUnreadCounter,
    setLastStatus,
    readMessages,
    readCurrentMessage,
    increaseUnreadCounterOut,
    decreaseUnreadCounterOut,
    setUnreadCounterOut,
    setDialogUnreadCounter,
    increaseDialogUnreadCounter,
    decreaseDialogUnreadCounter
  }
})

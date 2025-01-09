export const messages = [
/**Chat 1 */
  {
    chatId: 1, messageId: 1,
    timestamp: 1727008959,
    type: "message.system", text: 'Для начала диалога заполните и отправьте шаблон сообщения',
  },
/**Chat 3 */
  {
    senderId:2,chatId: 2, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", status: 'received', timestamp: '1727027959',
    transcript: {
      text: 'Очень плохо себя чувствую, не смогу, к сожалению...',
    },
  },
  {
    senderId:3,chatId: 2, type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    timestamp: '1726743559', text: "Посмотри, как красиво я умею фотографировать", status: 'read',
  },
  { senderId:3,chatId: 2, type: "message.text", text: "Привет! Ждём сегодня в обед на мероприятие, сможешь прийти?", status: 'read', timestamp: '1727027059' },

];

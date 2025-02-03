export const messages = [
/**Chat 1 dialog 1 */
  {
    senderId:1,chatId: 1, dialogId: '1', type: "message.call",
    callDuration: "18 мин", isMissedCall: false, timestamp: '1727028999',
    transcript: {
      dialog: [
        {
          time: '00:00',
          text: 'привет, Татьяна',
          position: 'right',
        },
        {
          time: '00:05',
          text: 'привет, Юра',
          position: 'left',
        },
        {
          time: '00:10',
          text: 'как дела?',
          position: 'right',
        },
        {
          time: '00:15',
          text: 'все норм',
          position: 'left',
        },
      ],
    },
  },
  {
    senderId:1, chatId: 1, dialogId: '1',type: "message.text", text: "Созвонимся сегодня?", status: 'read', timestamp: '1727027859',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    senderId:4,chatId: 1, dialogId: '1',type: "message.text", text: "Привет! Давай сейчас",
    status: 'read', timestamp: '1727028959',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }]
  },
  {
    chatId: 1, senderId:4, dialogId: '1',type: "message.video", url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    direction: 'outgoing', status: 'read', timestamp: '1727087959',views: 1667,alt: "Example Video",
  },
  {
    chatId: 1, messageId: 1, dialogId: '1',
    timestamp: 1727008959,
    type: "message.system", text: 'Сообщения в чатах сбрасываются при перезагрузке страницы.',
  },
/**Chat 1 dialog 2*/
  {
    senderId:1,chatId: 1, dialogId: '2',text:'Привет! Можешь распечатать?',type: "message.file", url: "https://axiomabio.com/pdf/test.pdf", filename: "Документ.pdf",
    status: 'read', timestamp: '1727026959', actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
  },
  { senderId:1,chatId: 1, dialogId: '2',type: "message.text", text: "Очень нужно!", status: 'read', timestamp: '1727027969' },
  {
    senderId:4,chatId: 1, dialogId: '2',type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    status: 'received', timestamp: '1727527159',
    actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }],
    transcript: {
      text: 'Хорошо, заходи через полчаса',
    },
  },
  {
    senderId:1,chatId: 1,  dialogId: '2',type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    text: "Привет!", status: 'received', timestamp: '1727027959',
    transcript: {
      text: 'Очень плохо себя чувствую, не смогу, к сожалению...',
    },
  },
  {
    senderId:4,chatId: 1,  dialogId: '2',type: "message.image", url: "https://nationaltoday.com/wp-content/uploads/2022/05/Sun-Day--1200x834.jpg", alt: "Example Image",
    timestamp: '1726743559', text: "Посмотри, как красиво я умею фотографировать", status: 'read',
  },
  { senderId:4,chatId: 1,  dialogId: '2',type: "message.text", text: "Привет! Ждём сегодня в обед на мероприятие, сможешь прийти?", status: 'read', timestamp: '1727027059' },

];

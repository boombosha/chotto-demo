export const messages = [
/**Chat 1 */
  {
    senderId:1,chatId: 1, type: "message.call", dialogId: "1",
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
    header: 'Юрий',
  },
  {
    senderId:1, chatId: 1, type: "message.text", text: "Созвонимся сегодня?", status: 'read', timestamp: '1727027859',
    dialogId: "1",
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }
    ],
    header: 'Юрий',
  },
  {
    senderId:4,chatId: 1, type: "message.text", text: "Привет! Давай сейчас",
    dialogId: "1",
    status: 'read', timestamp: '1727028959',
    actions: [
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить' }
    ],
    header: 'Татьяна',
  },
  {
    chatId: 1, senderId:4, type: "message.video", url: "https://filebump2.services.mobilon.ru/file/i3UQnryC89WwxtigxSUXWq0ltJBhLfJXp5hT",
    direction: 'outgoing', status: 'read', timestamp: '1727087959',views: 1667,alt: "Example Video",
    header: 'Татьяна',
  },
  {
    chatId: 1, messageId: 1,
    dialogId: "1",
    timestamp: 1727008959,
    type: "message.system", text: 'Сообщения в чатах сбрасываются при перезагрузке страницы.',
  },
];

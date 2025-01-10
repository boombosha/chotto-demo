export const messages = [
  {
    senderId: 2, chatId: 1, text: 'Привет! Можешь распечатать?', type: "message.file", url: "https://axiomabio.com/pdf/test.pdf", filename: "Документ.pdf",
    status: 'read', timestamp: '1727026959', actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }]
  },
  { senderId: 2, chatId: 1, type: "message.text", text: "Очень нужно!", status: 'read', timestamp: '1727027969' },
  { senderId: 2, chatId: 2, type: "message.text", text: "Очень нужно!", status: 'read', timestamp: '1727027969' },
  { senderId: 2, chatId: 2, type: "message.text", text: "Очень нужно!", status: 'read', timestamp: '1727027969' },
  {
    senderId: 1, chatId: 1, type: "message.audio", url: "https://file-examples.com/storage/fe40e015d566f1504935cfd/2017/11/file_example_MP3_700KB.mp3",
    status: 'received', timestamp: '1727527159',
    actions: [{ action: 'edit', title: 'изменить' }, { action: 'delete', title: 'удалить' }],
    transcript: {
      text: 'Хорошо, заходи через полчаса',
    },
  },
];

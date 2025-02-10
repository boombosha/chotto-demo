export const chats = [
  {
    chatId: 1, name: "Юрий",
    avatar: 'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
    countUnread: 100, countUnreadOut: 0,
    lastMessage: '↺ video.mp4',
    'lastActivity.time': '23.09.2024',         // читаемый формат - для пользователей
    'lastActivity.timestamp': '1727087959',   // для сортировки
    isFixedBottom: false,
    isFixedTop: false,
    status: 'lightgreen',
    'lastMessage.status': 'read', // received|read|sent|in
    //В данном случае typing совершает "владелец" чата (поле name)
    //typing in - собеседник (Татьяна)
    typingIn: false,
    typing: false,
    metadata: 'юрий',    // фильтр работает по name и данным в metadata
    dialogsExpanded: true,
    actions: [
      { action: 'addDialog', title: 'Новый диалог', icon: 'https://placehold.jp/30/dd6699/ffffff/64x64.png?text=add' },
      { action: 'add', title: 'добавить', icon: 'https://placehold.jp/30/dd6699/ffffff/64x64.png?text=add' },
      { action: 'edit', title: 'изменить', icon: 'https://placehold.jp/30/dd6699/ffffff/64x64.png?text=pin' },
      { action: 'delete', title: 'удалить', icon: 'https://placehold.jp/30/dd6699/ffffff/64x64.png?text=del' },
    ],
    dialogs: [
      {
        dialogId: '1',
        icon: 'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
        name: 'диалог1 79135292926',
        fullname: 'диалог1 номер 79135292926 канал whatsapp 73912000000 (основной)',   // для tooltip'а
        countUnread: 10,
        'lastActivity.timestamp': 1727001759456,   // для сортировки
        isSelected: true,
      },
      {
        dialogId: '2',
        icon: 'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
        name: 'диалог2 7913529XXXX',
        fullname: 'диалог2 номер 7913529XX27 канал whatsapp 73912000000 (основной)',
        countUnread: 90,
        'lastActivity.timestamp': 1727001759111,   // для сортировки
        isSelected: false,
      },
      {
        dialogId: 'new',
        name: 'Создать диалог',
        fullname: 'Создать новый диалог с этим контактом',
        countUnread: 0,
        'lastActivity.timestamp': 1727000000000,   // для сортировки
        isSelected: false,
      },
    ],
    contact: {
      attributes: [
        {
          id: 'phone:79135292926',
          value: 'whatsapp 79135292926',
        },
        {
          id: 'phone:7913529XXXX',
          value: 'whatsapp 7913529XXXX',
        },
        {
          id: 'tgNickName:@antirek',
          value: 'telegram @antirek',
        },
      ],
    },
  },
];

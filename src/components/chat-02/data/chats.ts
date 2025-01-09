export const chats = [
  {
    chatId: 1, name: "Юрий",
    avatar: 'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
    countUnread: 0, countUnreadOut: 0,
    lastMessage: 'Начать диалог',
    'lastActivity.time': '23.09.2024',         // читаемый формат - для пользователей
    'lastActivity.timestamp': '1727087959',   // для сортировки
    isFixedBottom: false,
    isFixedTop: false,
    status: 'lightgreen',
    'lastMessage.status': 'in', // received|read|sent|in
    actions: [
      { action: 'pinUp', title: 'прикрепить сверху' },
      { action: 'pinDown', title: 'прикрепить снизу' }
    ],
    //В данном случае typing совершает "владелец" чата (поле name)
    //typing in - собеседник (Татьяна)
    typingIn: false,
    typing: false,
    metadata: 'юрий',    // фильтр работает по name и данным в metadata
  },
  {
    chatId: 2, name: "Алексей",
    countUnread: 1, countUnreadOut: 0,
    isFixedBottom: false,
    isFixedTop: false,
    'lastActivity.time': '23.09.2024',
    'lastMessage.status': 'in', // received|read|sent|in
    'lastActivity.timestamp': '1727027959',
    actions: [
      { action: 'pinUp', title: 'прикрепить сверху' },
      { action: 'pinDown', title: 'прикрепить снизу' }
    ],
    typing: false,
    typingIn: false,
    lastMessage: 'Привет! ...',
    metadata: 'алексей',
    status: 'lightgreen',
  },
];

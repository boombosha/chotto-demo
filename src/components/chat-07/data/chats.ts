export const chats = [
  {
    chatId: 1, name: "GigaChat",
    avatar: 'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
    countUnread: 0, countUnreadOut: 0,
    lastMessage: '↺ video.mp4',
    'lastActivity.time': '23.09.2024',         // читаемый формат - для пользователей
    'lastActivity.timestamp': '1727087959',   // для сортировки
    isFixedBottom: false,
    isFixedTop: false,
    status: 'lightgreen',
    'lastMessage.status': 'read', // received|read|sent|in
    actions: [
      { action: 'pinUp', title: 'прикрепить сверху' },
      { action: 'pinDown', title: 'прикрепить снизу' }
    ],
    //В данном случае typing совершает "владелец" чата (поле name)
    //typing in - собеседник (Татьяна)
    typingIn: false,
    typing: false,
    metadata: 'юрий',    // фильтр работает по name и данным в metadata
    commands: [
      {
        action: '/start',
        title: '/start',
        description: 'Начать работу с GigaChat',
      },
      {
        action: '/auth',
        title: '/auth',
        description: 'Получить токен авторизации',
      },
      {
        action: '/info',
        title: '/info',
        description: 'О чатботе',
      },
      {
        action: '/tokens',
        title: '/tokens',
        description: 'Количество доступных токенов',
      }
    ]
  },
];

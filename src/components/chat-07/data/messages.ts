export const messages = [
/**Chat 1 */
  {
    chatId: 1, messageId: 1,
    timestamp: 1727008959,
    type: "message.system", text: 'Сообщения в чатах сбрасываются при перезагрузке страницы.',
  },

  {
    command: '/info', last: true,
    type: "message.text", text: 'GigaChat - нейросетевая языковая модель от Сбера.',
  },

  {
    command: '/start', last: true,
    type: "message.text", text: 'Для начала работы с моделью вам необходимо авторизоваться (команда /auth). После успешной авторизации вводите ваши сообщения как обычно.',
  },

  {
    command: '/auth', step: 1, last: false, mode: 'input', value: 'CLIENT_ID',
    type: "message.text", text: 'Введите CLIENT_ID',
  },

  {
    command: '/auth', step: 2, last: false, mode: 'input', value: 'CLIENT_SECRET',
    type: "message.text", text: 'Введите CLIENT_SECRET',
  },

  {
    command: '/auth', step: 3, last: false, mode: 'request',
    type: "message.text", text: 'Отправил ваши данные, жду ответа от сервера...',
  },

  {
    command: '/auth', step: 4, mode: 'success', last: true,
    type: "message.text", text: 'Вы успешно авторизованы',
  },

  {
    command: '/error', last: true,
    type: "message.text", text: 'При запросе к серверу произошла ошибка',
  },

  {
    command: '/tokens', mode: 'request', last: true,
    type: "message.text", text: 'Для стандартной модели GigaChat доступно токенов: ',
  },
];


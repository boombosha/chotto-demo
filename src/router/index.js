import { createRouter, createWebHistory } from 'vue-router';
import ChatDemo0 from '../components/chat-00/ChatDemo0.vue';
import ChatDemo1 from '../components/chat-01/ChatDemo1.vue';
import ChatDemo2 from '../components/chat-02/ChatDemo2.vue';
import ChatDemo3 from '../components/chat-03/ChatDemo3.vue';
import ChatDemo4 from '../components/chat-04/ChatDemo4.vue';
import ChatDemo5 from '../components/chat-05/ChatDemo5.vue';
import ChatDemo6 from '../components/chat-06/ChatDemo6.vue';
import ChatDemo7 from '../components/chat-07/ChatDemo7.vue';
import ChatDemo8 from '../components/chat-08/ChatDemo8.vue';
import ChatDemo9 from '../components/chat-09/ChatDemo9.vue';
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: "/:catchAll(.*)",
      redirect: '/chotto-demo/0',
	  },
    {
      path: '/chotto-demo/0',
      component: ChatDemo0
    },
    {
      path: '/chotto-demo/1',
      component: ChatDemo1
    },
    {
      path: '/chotto-demo/2',
      component: ChatDemo2
    },
    {
      path: '/chotto-demo/3',
      component: ChatDemo3
    },
    {
      path: '/chotto-demo/4',
      component: ChatDemo4
    },
    {
      path: '/chotto-demo/5',
      component: ChatDemo5
    },
    {
      path: '/chotto-demo/6',
      component: ChatDemo6
    },
    {
      path: '/chotto-demo/7',
      component: ChatDemo7
    },
    {
      path: '/chotto-demo/8',
      component: ChatDemo8
    },
    {
      path: '/chotto-demo/9',
      component: ChatDemo9
    },
  ]
})

export default router

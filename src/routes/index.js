import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

//import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);// Vue.use를 통해 명시적으로 라우터 추가

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news', 
    },
    {
      // path: url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시됨 컴포넌트
      //component: createListView('NewsView'),
      component:NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log("error");
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      //component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log("error");
          })
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      //component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log("error");
          })
      }
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});

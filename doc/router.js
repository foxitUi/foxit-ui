import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function load(component) {
  return resolve => require([`views/${component}.vue`], resolve);
}
function loadDocs(component) {
  return resolve => require([`docs/${component}.md`], resolve);
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/alert'
    },
    {
      path: '/alert',
      name: 'alert',
      component: loadDocs('alert')
    },
  ]
})

export default router

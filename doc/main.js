import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'assets/base.scss';
import 'assets/docs/index.scss';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import foxitUi from '@/fwButton/index'
Vue.use(foxitUi,{btnType:'success'});

import demoBlock from 'components/demoBlock';
Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false

import hljs from 'highlight.js';

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
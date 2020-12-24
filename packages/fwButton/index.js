import foxit from './src/index.vue';
import '@/style/iconfont/iconfont.css';
import { Button } from 'element-ui';
import './src/css/index.scss';
foxit.install = function (Vue) {
  Vue.use(Button)
  Vue.component(foxit.name, foxit);
};
export default foxit;
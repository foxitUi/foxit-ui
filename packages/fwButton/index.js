import foxit from './src/index.vue';
import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/button.css';
import 'element-ui/lib/theme-chalk/button-group.css';
import 'element-ui/lib/theme-chalk/icon.css';
import './src/css/index.less';
foxit.install = function (Vue) {
  Vue.use(Button)
  Vue.component(foxit.name, foxit);
};
export default foxit;
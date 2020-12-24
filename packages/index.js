import fwButton from './fwButton'
import './style/index.scss';
export default {
  install(Vue,opts = {}) {
    Vue.use(fwButton);
    Vue.prototype.$FOXIT = {
      btnType:opts.btnType || '',
    };
  },
}
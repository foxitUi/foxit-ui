import fwButton from './fwButton'
export default {
  install(Vue,opts = {}) {
    Vue.use(fwButton);
    Vue.prototype.$FOXIT = {
      btnType:opts.btnType || '',
    };
  },
}
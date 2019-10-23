import { setPublicPath } from 'systemjs-webpack-interop'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
setPublicPath('navbar')
Vue.config.productionTip = false;

// 创建一个vue的生命周期实例
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render: (h) => h(App),
  },
});
// 项目初始化启动的钩子
export const bootstrap = vueLifecycles.bootstrap;
// 项目启动后的钩子
export const mount = vueLifecycles.mount;
// 项目卸载的钩子
export const unmount = vueLifecycles.unmount;



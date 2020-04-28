import Vue from 'vue'
import App from './App.vue'

import "../node_modules/devextreme/dist/css/dx.common.css";
import "../node_modules/devextreme/dist/css/dx.light.css";
import "../node_modules/devexpress-richedit/dist/dx.richedit.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

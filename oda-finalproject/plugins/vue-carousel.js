import Vue from 'vue'
import vCarousel from 'vue-carousel';
const VueCarousel = {
  install(Vue, options) {
    Vue.component('v-carousel', vCarousel)
  }
};
Vue.use(VueCarousel);
export default VueCarousel;
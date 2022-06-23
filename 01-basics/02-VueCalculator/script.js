import { computed } from 'vue';
import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
  data() {
    return {
      oneValue:0,
      twoValue:0,
      checked:null
    }
  },
  computed:{
    calcOutput(){
      if(this.checked==='sum'){
        return this.oneValue+this.twoValue
      }
      else if(this.checked==='subtract'){
        return this.oneValue-this.twoValue
      }
      else if(this.checked==='multiply'){
        return this.oneValue*this.twoValue
      }
      else if(this.checked==='divide'){
        return this.oneValue/this.twoValue
      }else{
        return ''
      }
    }
  }



}).mount('#app')

import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props:{
    count:{
      type:Number,
      required:true,
      default:0
    }
  },
  emits:['update:count'],
  methods:{
    clickToButton(value){
      this.$emit('update:count',value+1)
    }
  },
  

  
  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="clickToButton(count)">{{ \count }}</button>`,
});

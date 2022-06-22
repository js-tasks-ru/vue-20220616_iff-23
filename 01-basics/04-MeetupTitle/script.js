import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';



// Требуется создать Vue приложение
createApp({
  data() {
    return {
      changeId:null,
      title:''
    }
  },
  watch:{
    changeId(newId){
      this.fetchMeetupById(newId)
      .then(data=>this.title=data.title)
    }
  },
  methods:{
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    }
  }
}).mount('#app')
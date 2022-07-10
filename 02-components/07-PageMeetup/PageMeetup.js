import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',
  props:{
    meetupId:{
      required:true
    }
  },
  data(){
    return{
      meetup:null,
      load:0,
      error:''
    }
  },
  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  mounted(){
    fetchMeetupById(this.meetupId).then(data=>{
      this.meetup=data
      this.load=1
    })
    .catch((err)=>{
      this.error=err.message
      this.load=2
    })
  },
  watch:{
    meetupId:function(){
      this.load=0
      fetchMeetupById(this.meetupId)
      .then(data=>{
        this.meetup=data
        this.load=1
      })
      .catch((err)=>{
        this.error=err.message
        this.load=2
      })
    }
  },
  template: `
    <div class="page-meetup">
     <MeetupView v-if="load===1" :meetup="meetup"/>

      <ui-container v-else-if="load===0">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>{{error}}</ui-alert>
      </ui-container>
    </div>`,
});

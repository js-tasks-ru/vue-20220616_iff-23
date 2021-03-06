import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props:{
    agendaItem:{
      required:true
    },
  },
  components:{
    agendaItemIcons,
    agendaItemDefaultTitles
  },
  computed:{
    getIcon(){
      return '/assets/icons/icon-'+agendaItemIcons[this.agendaItem.type]+'.svg'
    },
    getTitle(){
      return agendaItemDefaultTitles[this.agendaItem.type]
    }
  },


  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="getIcon" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{(agendaItem.title)?agendaItem.title:getTitle}}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type==='talk'">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang"> {{agendaItem.language}} </span>
        </p>
        <p> {{agendaItem.description}} </p>
      </div>
    </div>`,
});

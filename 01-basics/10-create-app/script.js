import { createApp, defineComponent } from 'vue';

const App = defineComponent({
  name: 'App',

  setup() {
    const currentDate = new Date();
    const options = { dateStyle: 'long' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return {
      formattedDate
    };
  },
  
  template: `<div>Сегодня {{ formattedDate }}</div>`
});

createApp(App).mount('#app');

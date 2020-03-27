import Vue from 'vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Column from './components/Column';

new Vue ({
  el: '#app',
  store,
  // eslint-disable-next-line no-unused-vars
  render: h => <Column />
})

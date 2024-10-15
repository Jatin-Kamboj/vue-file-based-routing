// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Import the router

const app = createApp(App);

app.use(router); // Use the router instance
app.mount('#app');

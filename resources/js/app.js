import '@css/app.css';
import './bootstrap';
import {createApp, h} from 'vue';
import Welcome from '@comps/Welcome.vue';

import.meta.glob([
    '../images/**',
]);

let appName = import.meta.env.VITE_APP_NAME;
let orgName = import.meta.env.VITE_ORG;

createApp(Welcome, {title: appName, subTitle: orgName}).mount('#app');


// alert('Hello, Vite!');
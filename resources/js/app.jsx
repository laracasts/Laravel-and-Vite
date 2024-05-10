import '@css/app.css';
import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from '@comps/Welcome.jsx';

import.meta.glob([
    '../images/**',
]);

let title = import.meta.env.VITE_APP_NAME;
let subTitle = import.meta.env.VITE_ORG;

ReactDOM
    .createRoot(document.getElementById('app'))
    .render(<Welcome title={title} subTitle={subTitle} />);


// alert('Hello, Vite!');
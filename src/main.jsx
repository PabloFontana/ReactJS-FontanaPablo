import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAelJOe-suOcgpNkjKdCBOPy7OzQZ46APw",
  authDomain: "fontanapabloch.firebaseapp.com",
  projectId: "fontanapabloch",
  storageBucket: "fontanapabloch.appspot.com",
  messagingSenderId: "1006442015305",
  appId: "1:1006442015305:web:2a80b08b2383d1906a2d98"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

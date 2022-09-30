import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZeBazCc8MwpcGkxlAfhdGN1n89FIMGQc",
  authDomain: "coderhouse-ecommerce-9484f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9484f",
  storageBucket: "coderhouse-ecommerce-9484f.appspot.com",
  messagingSenderId: "331757527265",
  appId: "1:331757527265:web:b0b88213fe73f220c397a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

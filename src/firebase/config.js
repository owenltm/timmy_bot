require("dotenv").config();

// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_TOKEN,
  authDomain: "timmy-ae12b.firebaseapp.com",
  databaseURL: "https://timmy-ae12b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET+".appspot.com",
  messagingSenderId: "637090581270",
  appId: "1:637090581270:web:ad11a20d6344fe20961e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
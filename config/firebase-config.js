const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyC-RtO4eD6cNN5XkOcLigY9joGsPJq_Yxs",
  authDomain: "authentication-ff20d.firebaseapp.com",
  projectId: "authentication-ff20d",
  storageBucket: "authentication-ff20d.appspot.com",
  messagingSenderId: "807062522568",
  appId: "1:807062522568:web:4cb30d981a2572348533fd",
  measurementId: "G-2XP4VG2KZ5",
};

const app = initializeApp(firebaseConfig);

module.exports = getAuth(app);

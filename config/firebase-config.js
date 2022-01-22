const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDmniPsj_s_y-siPZcj_3vXaUlAbpZoOPA",
  authDomain: "todomenager.firebaseapp.com",
  projectId: "todomenager",
  storageBucket: "todomenager.appspot.com",
  messagingSenderId: "568789487705",
  appId: "1:568789487705:web:9a4230092c38018ae96148",
  measurementId: "G-KQ1JTLY5J1",
};

const app = initializeApp(firebaseConfig);

module.exports = getAuth(app);

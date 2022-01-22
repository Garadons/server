var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://todomenager-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = admin.firestore();

const usersRef = db.collection("Users");

module.exports = usersRef;

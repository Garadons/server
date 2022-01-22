const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const usersRef = require("../config/firebase-admin-config");
const auth = require("../config/firebase-config");

class UserService {
  async reg(name, email, password) {
    try {
      const responce = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = responce.user.uid;
      const data = {
        id: uid,
        name: name,
        email: email,
      };

      usersRef.doc(data.id.toString()).set(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async signin(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout(refreshToken) {}
}

module.exports = new UserService();

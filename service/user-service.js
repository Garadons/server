const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const auth = require("../config/firebase-config");

class UserService {
  async reg(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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

const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const usersRef = require("../config/firebase-admin-config");
const auth = require("../config/firebase-config");

const jwt = require("jsonwebtoken");

class UserService {
  async reg(name, email, password) {
    try {
      const responce = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = responce.user.uid;

      const token = this.generateToken({ uid });

      const data = {
        uid,
        name,
        email,
        token,
      };

      await usersRef.doc(data.uid.toString()).set(data);

      return { token };
    } catch (error) {
      throw new Error(error);
    }
  }

  async signin(email, password) {
    try {
      const responce = await signInWithEmailAndPassword(auth, email, password);

      const uid = responce.user.uid;
      const token = this.generateToken({ uid });

      await usersRef.doc(uid).update("accessToken", token);

      return { token };
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout(refreshToken) {}

  async gettasks(token) {
    try {
      const userData = this.validateToken(token);

      if (!userData) {
        throw new Error("Устаревший токен");
      }

      const { uid } = userData;

      const doc = await usersRef.doc(uid).get();
      let { todo } = doc.data();

      if (!todo) {
        todo = [];
      }

      return todo;
    } catch (error) {
      throw new Error(error);
    }
  }

  async settasks(token, tasks) {
    try {
      const userData = this.validateToken(token);

      if (!userData) {
        throw new Error("Устаревший токен");
      }
      const { uid } = userData;

      await usersRef.doc(uid).update("todo", tasks);
    } catch (error) {
      throw new Error(error);
    }
  }

  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_KEY, {
      expiresIn: "1d",
    });

    return accessToken;
  }

  validateToken(token) {
    try {
      const userData = jwt.verify(token, process.env.SECRET_ACCESS_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }
}

module.exports = new UserService();

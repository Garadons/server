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

      const token = this.generateToken();

      const uid = responce.user.uid;
      const data = {
        id: uid,
        name: name,
        email: email,
        accessToken: token.accessToken,
      };

      usersRef.doc(data.id.toString()).set(data);

      return token;
    } catch (error) {
      throw new Error(error);
    }
  }

  async signin(email, password) {
    try {
      const responce = await signInWithEmailAndPassword(auth, email, password);

      const uid = responce.user.uid;
      const token = this.generateToken();

      usersRef.doc(uid).update("accessToken", token.accessToken);

      return token;
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout(refreshToken) {}

  generateToken() {
    const accessToken = jwt.sign({}, process.env.SECRET_ACCESS_KEY, {
      expiresIn: "10s",
    });
    // const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    //   expiresIn: "30s",
    // });
    return {
      accessToken,
      //   refreshToken,
    };
  }
}

module.exports = new UserService();

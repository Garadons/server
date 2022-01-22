const userService = require("../service/user-service");

class UserController {
  async reg(req, res, next) {
    const { email, password } = req.body.data;
    try {
      await userService.reg(email, password);
      res.json("Succes reg");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async signin(req, res, next) {
    try {
      const { email, password } = req.body.data;
      await userService.signin(email, password);
      res.json("Succes signin");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();

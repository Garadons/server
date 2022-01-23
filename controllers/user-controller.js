const userService = require("../service/user-service");

class UserController {
  async reg(req, res, next) {
    const { name, email, password } = req.body;
    try {
      const token = await userService.reg(name, email, password);
      res.json(token);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async signin(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await userService.signin(email, password);
      res.json(token);
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

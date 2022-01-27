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

  async gettasks(req, res, next) {
    try {
      const { token } = req.body;
      const tasks = await userService.gettasks(token);

      res.json(tasks);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async settasks(req, res, next) {
    try {
      const { token, tasks } = req.body;
      await userService.settasks(token, tasks);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new UserController();

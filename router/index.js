const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();

router.post("/reg", userController.reg);
router.post("/signin", userController.signin);
router.post("/logout", userController.logout);
router.post("/gettasks", userController.gettasks);
router.post("/settasks", userController.settasks);

module.exports = router;

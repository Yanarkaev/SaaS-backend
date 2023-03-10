const {Router} = require("express");
const { authController } = require("../controllers/auth.controller");

const router = Router()

router.post("/registration", authController.signUp)
router.post("/login", authController.signIn);
router.get("/users", authController.getUsers);

module.exports = router
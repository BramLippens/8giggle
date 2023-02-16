const express = require("express");
const router = express.Router();
const {
  registerView,
  loginView,
  registerUser,
} = require("../controllers/loginController");

router.get("/register", registerView);
router.get("/login", loginView);

router.post("/register", registerUser);

module.exports = router;

const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = (req, res) => {
  const { username, password, confirm: confirm, email } = req.body;
  let errors = [];

  if (!username || !password || !confirm || !email) {
    // if any of the fields are empty log what was empty
    if (!username) {
      console.error({ msg: "username is empty" });
    }
    if (!password) {
      console.error({ msg: "password is empty" });
    }
    if (!confirm) {
      console.error({ msg: "password2 is empty" });
    }
    if (!email) {
      console.error({ msg: "email is empty" });
    }
  }

  if (password !== confirm) {
    errors.push({ msg: "Passwords do not match" });
  } else {
    User.findOne({ email: email, username: username }).then((user) => {
      if (user) {
        console.error({ msg: "email already exists" });
      } else {
        const newUser = new User({
          username,
          password,
          email,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                res.redirect("/");
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  }
  // log errors
};

const registerView = (req, res) => {
  res.render("register", {});
};

const loginView = (req, res) => {
  res.render("login", {});
};

module.exports = {
  registerView,
  loginView,
  registerUser,
};

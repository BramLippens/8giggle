const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerView = (req, res) => {
  const { username, password, password2, email } = req.body;
  let errors = [];

  if (!username || !password || !password2 || !email) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  } else {
    User.findOne({ email: email, username: username }).then((user) => {
      if (user) {
        errors.push({ msg: "email already exists" });
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
  console.log(errors);
};

const loginView = (req, res) => {
  res.render("login", {});
};

module.exports = {
  registerView,
  loginView,
};

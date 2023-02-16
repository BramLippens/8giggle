const bcrypt = require("bcryptjs");
Localstrategy = require("passport-local").Strategy;

const User = require("../models/User");
const loginCheck = (passport) => {
  passport.use(
    new Localstrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email }).then((user) => {
        if (!user) {
          return done(null, false, { message: "Wrong email" });
        }
        bcrypt
          .compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          })
          .catch((err) => console.log(err));
      });
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

module.exports = {
  loginCheck,
};

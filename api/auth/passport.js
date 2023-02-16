const bcrypt = require("bcryptjs");
Localstrategy = require("passport-local").Strategy;

const User = require("../models/User");
const loginCheck = (passport) => {
  passport.use(
    new Localstrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            console.log("email not found");
            return done();
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              log("password incorrect");
              return done();
            }
          });
        })
        .catch((err) => console.log(err));
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

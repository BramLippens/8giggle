const protectRoute = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
};

const allowIf = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({
      message: "You are not authorized to access this route",
    });
    return next();
  }
  res.redirect("/dashboard");
};

module.exports = {
  protectRoute,
  allowIf,
};

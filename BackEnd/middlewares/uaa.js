const jwtManager = require("../jwt/jwtManager");

class Uaa {
  checkToken(req, res, next) {

    if (req.url === "/signin" || req.url === "/signup" || req.url === "/home") {
      next();
      return;
    }

    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ status: "auth_error" });
    } else {
      const data = jwtManager.verify(token);
      let loggeduser = data.email;
      
      if (!data) {
        return res.json({ status: "auth_error" });
      } else {
        req.name = data.name;
        req.role = data.role;
        next();
      }
    }
  }
}

module.exports = new Uaa();
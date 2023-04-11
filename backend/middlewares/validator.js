const jwt = require("jsonwebtoken");

// Middleware function to validate token and add userID to request body
const validator = (req, res, next) => {
  let token = req.headers.authorization;

  // Verify token
  jwt.verify(token, process.env.secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      res.status(404).send({ message: "Please login first!" });
    } else {
      // If request body is an array of objects, add userID to each object
      if (Array.isArray(req.body)) {
        req.body.forEach((item) => {
          item.userID = decoded.userID;
        });
      } else {
        // If request body is an object, add userID to it
        req.body.userID = decoded.userID;
      }
      next();
    }
  });
};

module.exports = { validator };

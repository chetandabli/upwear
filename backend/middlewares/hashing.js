const bcrypt = require("bcrypt");

// Middleware function that hashes the user's password before saving it to the database
const hashing = (req, res, next) => {
  // Hash the password using bcrypt with a salt round of 5
  bcrypt.hash(req.body.password, 5, async (err, hash) => {
    if (err) {
      console.log("error", err);
    } else {
      // Set the request body's password to the hashed value
      req.body.password = hash;
      // Call the next middleware function in the chain
      next();
    }
  });
};

module.exports = {
  hashing
};

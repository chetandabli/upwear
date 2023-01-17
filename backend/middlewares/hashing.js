const bcrypt = require("bcrypt");

const hashing = (req, res, next) => {
  bcrypt.hash(req.body.password, 5, async (err, hash) => {
    if (err) {
      console.log("error", err);
    } else {
        req.body.password = hash
        next()
    }
  });
};

module.exports = {
    hashing
}
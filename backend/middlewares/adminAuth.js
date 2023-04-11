// Import necessary modules
const jwt = require('jsonwebtoken');

// Middleware function to check if user is an admin
const adminAuth = (req, res, next)=>{
    // Check if request contains an authorization token
    let token = req.headers.authorization;
    if(token){
        // Verify if token is valid and get the decoded data
        let is_admin = jwt.verify(token, process.env.secretKey);
        if(is_admin){
            // Check if the admin ID in the token matches the expected admin ID
            if(is_admin.adminID == process.env.adminID){
                // If the admin ID matches, continue to the next middleware
                next()
            }else{
                // If the admin ID does not match, return an error message
                res.json({message: "You are not authorized to do this"})
            }
        }else{
            // If the token is not valid, return an error message
            res.json({message: "You are not authorized to do this"})
        }
    }else{
        // If the request does not contain an authorization token, return an error message
        res.json({message: "Please log in as an admin!"})
    }   
};

// Export the middleware function
module.exports = {
    adminAuth
}

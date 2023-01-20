const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next)=>{
    let token = req.headers.authorization;
    if(token){
        let is_admin = jwt.verify(token, process.env.secretKey);
        if(is_admin){
            if(is_admin.adminID == process.env.adminID){
                next()
            }else{
                res.json({message: "You are not authorize to do this"})
            }
        }else{
            res.json({message: "You are not authorize to do this"})
        }
    }else{
        res.json({message: "Please login as admin!"})
    }
    
};

module.exports = {
    adminAuth
}
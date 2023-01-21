const jwt=require("jsonwebtoken")

const validator = (req, res, next)=>{
    let token=req.headers.authorization
    jwt.verify(token, process.env.secretKey , (err, decoded)=>{
    if(err){
        console.log(err);
        res.status(404).send({ message: "please login again!" })
    }else{
        req.body.userID= decoded.userID;
        next()
    }
  })
};

module.exports = { validator }
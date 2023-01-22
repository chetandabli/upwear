const jwt=require("jsonwebtoken")

const validator = (req, res, next)=>{
    let token=req.headers.authorization
    jwt.verify(token, process.env.secretKey , (err, decoded)=>{
    if(err){
        console.log(err);
        res.status(404).send({ message: "please login first!" })
    }else{
        if(req.body.length){
            for(let i = 0; i < req.body.length; i++){
                req.body[i].userID= decoded.userID;
            }
            next()
        }else{
            req.body.userID= decoded.userID;
            next()
        }
    }
  })
};

module.exports = { validator }
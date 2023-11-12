const jwt = require("jsonwebtoken");

const key = "ryryryryry"

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if(!header){
        res.json({
            status: 401,
            message: "Unauthorized"
        })
        return
    }

    const token = header.split(" ")[1];


    if(!token){
        res.json({
            status: 401,
            message: "invalid token"
        })
        return
    }
    const payload = jwt.verify(token, key);
    
    req.payload = payload
    
    next()
}

module.exports = verifyToken
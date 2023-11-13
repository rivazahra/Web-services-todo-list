const jwt = require("jsonwebtoken");

const key = "ryryryryry";

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({
            status: 401,
            message: "Undefined Header"
        });
    }

    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "Invalid token"
        });
    }

   
    try {
        const payload = jwt.verify(token,process.env.SECRET || key);
        req.payload = payload;
        // req.user = user; 
        console.log('Payload Token:', req.payload);
        next();
    } catch (error) {
        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({
                status: 401,
                message: "Expired token",
                error: error.message
            });
        }else if(error.name === 'JsonWebTokenError'){
            return res.status(401).json({
                status: 401,
                message: "Invalid token",
                error: error.message
            })
        }
    }
};

module.exports = verifyToken;

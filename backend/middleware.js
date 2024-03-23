// const {User} = require("./db")
// const jwt = require('jsonwebtoken')
// const JWT_SECRET = require("./config")

// function authMiddleware(req,res,next) {
//     const token = req.headers.authorization;
//     const words = token.split(" ");
//     const jwtToken = words[1]

//     const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
//     if(decodedValue.username) {
//        next()
//     } else {
//         return res.status(403)
//     }
// }

const JWT_SECRET = require("./config")
const jwt = require("jsonwebtoken")

const authMiddleware = (req, res , next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")){ 
        return res.status(403).json({authHeader})
    }
    
    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        if(decoded.userId) {
            req.userId = decoded.userId
            next()
        }

    } catch (error) {
        return res.status(403).json({error})

    }
}

module.exports = {
    authMiddleware
}


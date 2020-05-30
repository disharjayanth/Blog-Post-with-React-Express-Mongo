const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    try{
        const token  = req.headers.authorization.split(" ")[1]
        const a = token.split("=")[1]
        console.log(a)
        const decoded = jwt.verify(a,"secret")
        req.userData = decoded
        next()
    }
    catch (error){
        return res.status(401).json({
            message: "Auth Failed."
        })
    }
}
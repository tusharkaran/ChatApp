const jwt = require('jsonwebtoken')

const geneterToken =(id) =>{
    return jwt.sign({id},process.env.JWT_SECERT )
}

module.exports =geneterToken;
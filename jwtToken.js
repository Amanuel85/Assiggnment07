const jwt = require('jsonwebtoken')
const secret = 'secrettest'

class Jwtmanager{
    constructor(){}
    generate(data){
        const token = jwt.sign(data,secret)
        return token
        }
    verfy(token){
        try {
        const data = jwt.verify(token,secret)
        return data
        }
       catch(err){} }
}

module.exports = Jwtmanager
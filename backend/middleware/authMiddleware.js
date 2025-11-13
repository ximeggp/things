const jwt = require('jsonwebtoken')
const User = require('../models/usersModel')

const protect = async(req, res, next) => {

     // definir la variable token
        let token 

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            try {
                // obtenemos el token del encabezado de autorización
                token = req.headers.authorization.split(' ')[1]
                const decoded = jwt.verify(token, process.env.JWT_SECRET)

                // buscamos el usuario con el id del token
                req.user = await User.findById(decoded.id).select('-password')

                next()

            } catch (error) {
                console.log(error)
                res.status(401)
                throw new Error('upsi, no tienes acceso autorizado')
            }

        }

        if (!token) {
            res.status(401)
            throw new Error('no proporcionaste el token')
        }
    
}

module.exports = {protect}

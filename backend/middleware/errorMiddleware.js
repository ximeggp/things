const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 // esta línea es como un if
    res.status(statusCode)
    res.json({
        message: err.message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack //tres iguales para verificar la igualdad y que sea el mismo tipo de dato
    })
}

module.exports = {
    errorHandler
}
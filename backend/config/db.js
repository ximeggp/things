const mongoose = require('mongoose')
const connectDB = async() => { // async es para que el programa se detenga hasta que una función se cumpla
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)//await siempre debe ir en un async
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB
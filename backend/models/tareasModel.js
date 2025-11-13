const mongoose = require('mongoose')
const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    texto: {
        type: String,
        required: [true, "porfi teclea el texto de la tareita :)"]
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('Tarea', tareaSchema)
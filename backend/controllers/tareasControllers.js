const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler (async (req, res) => {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
})
const createTareas = asyncHandler (async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error("teclea algo, porfi")
    }

    const tarea = await Tarea.create({
        texto: req.body.texto
    })

    res.status(201).json(tarea)
})

const updateTareas = asyncHandler (async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)
    if (!tarea){
        res.status(404)
        throw new Error("Tareita inexistente")
    }
    
   if (tarea.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Usuario no autorizado para actualizar la tarea.')
   } else {
        const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(tareaUpdated)
   }
})

const deleteTareas = asyncHandler (async (req, res) => {
    if (tarea.user.toString() !== req.user.id){
       res.status(401)
       throw new Error('Usuario no autorizado para eliminar la tarea.') 
    } else {
        await tarea.deleteOne()
        res.status(200).json({id: req.params.id})
    }
})


module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
};
const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')
const {createCustomErrors} = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks: tasks})
    })

const createTask = asyncWrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const getTask = asyncWrapper( async (req, res, next) => {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return next(createCustomErrors(`No task found with id: ${taskID}`, 404))        
        }
        res.status(200).json({task: task})
})


const deleteTask = asyncWrapper( async (req, res) => {
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return next(createCustomErrors(`No task found with id: ${taskID}`, 404))        
        }
        res.status(200).json({deletedTask: {task}})
})

const updateTask = asyncWrapper( async (req, res) => {
        const {id: taskID} = req.params

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true})

        if(!task){
            return next(createCustomErrors(`No task found with id: ${taskID}`, 404))        
        }

        res.status(200).json({id: taskID, data: req.body})
})



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
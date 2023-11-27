const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })

    }
    catch(err)
    {
        res.status(500).json({msg:"errorrr!"})
    }
    
}
//test
//damn it works
const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask
}
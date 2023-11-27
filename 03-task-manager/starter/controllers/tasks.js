const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try{
      const task = await Task.find({})
      res.status(201).json({task})
    }
    catch(error)
    {
      res.status(500).json({msg:err})
    }
   
}

const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })

    }
    catch(err)
    {
        res.status(500).json({msg:err})
    }
    
}
//test
//damn it works
const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ Msg: `No task found with this ID: ${taskId}` });
        }

        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ msg: err });
    }
};


const deleteTask = async(req, res) => {

    try{
        const {id:taskId} = req.params
        const TASK= await Task.findOneAndDelete({_id:taskId})
        if(!TASK)
        {
            res.status(404).json({MSG:"ID does not exists : ${taskid}"})
        }
        res.status(200).json({TASK,MSG:"DELETED"})
    }
    catch(error){
        res.status(500).json({msg:error})
    }

    
}
//2:13:31
const updateTask = async(req, res) => {
    try{
        const {id:taskdi} = req.params
        const task = await Task.findOneAndUpdate({_id:taskdi},req.body)
        if(!task)
        {
            return res.status(404).json({msg:`No task with id: ${taskdi}`})
        }
        res.status(200).json({task})
      }
      catch(errr)
      {
        res.status(500).json({msg: errr})
      }

}
module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask
}
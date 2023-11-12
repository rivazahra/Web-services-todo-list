const {Todo} = require("../models")

module.exports = {
    getAllTodo: async (req, res) => {
        try {
            const todos = await Todo.findAll()
            return res.status(200).json({
                status: 200,
                message: "Data todo",
                data: todos
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Can't get data todo"
            })
        }
    },
    getTodoById: async (req, res) => {
        try{
            const data = await Todo.findOne({
                where: {
                    id: req.params.id
                }
            })
            return res.status(200).json({
                status: 200,
                message: "Data todo",
                data: data
            })
        }catch(error){
            return res.status(500).json({
                status: 500,
                message: "Can't get data todo"
            })
        }
    },

    createTodo : async (req, res) => {
        let data = req.body
        console.log(data)
        try {
            await Todo.create(data)
            res.status(201).json({
                message: "Success create todo"
            })
            console.log(data)
        } catch (error) {
            res.status(500).json({
                message: "Fail create todo"
            })
        }
    },
    updateTodo: async (req, res) => {
        let data = req.body
        try {
            await Todo.update(data, {
                where: {
                    id: req.params.id
                }
            })
            res.status(201).json({
                message: "Success update todo"
            })
        } catch (error) {
            res.status(500).json({
                message: "Fail update todo"
            })
        }
    },
    deleteTodo: async (req, res) => {
        try {
            await Todo.destroy({
                where: {
                    id: req.params.id, user_id:id
                }
            })
            res.status(201).json({
                message: "Success delete todo"
            })
        } catch (error) {
            res.status(500).json({
                message: "Fail delete todo"
            })
        }
    },
    deleteAllTodo: async (req, res) => {
        try {
            await Todo.destroy({
                where: {
                    user_id: id
                }
            })
            res.status(201).json({
                message: "Success delete all todo"
            })
        } catch (error) {
            res.status(500).json({
                message: "Fail delete all todo"
            })
        }
    }
}

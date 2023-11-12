const {Todo} = require("../models")

module.exports = {
    getAllTodo : async (req, res) => {
        try {
            const { id } = req.payload;
            const dataTodo = await Todo.findAll({ where: { user_id: id }, order: [["createdAt", "DESC"]] });
    
            res.status(200).json({
                status: 200,
                message: "Data todo",
                data: dataTodo,
            });
            console.log('Data Todo:', dataTodo);
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Kesalahan server internal pada todo",
            });
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

    createTodo: async (req, res) => {
        try {
            let data = req.body;
    
            // Konversi is_completed ke tipe data boolean
            data.is_completed = data.is_completed === 'true';
    
            await Todo.create(data);
    
            res.status(201).json({
                message: "Success create todo"
            });
        } catch (error) {
            res.status(500).json({
                message: "Fail create todo",
                error: error.message
            });
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
                    id: req.params.id
                }
        
            })
            res.status(200).json({
                message: "Success delete todo"
                
            })
        } catch (error) {
            res.status(500).json({
                message: "Fail delete todo"
            })
        }
    },
    deleteAllTodo: async (req, res) => {
        const userId = req.payload.id; 
        try {
            await Todo.destroy({
                where: {
                    user_id: userId
                }
                
            })
            res.status(201).json({
                message: "Success delete all todo"
            })
            console.log("Deleting todos for user with ID:", userId);
            console.log(Todo)
        } catch (error) {
            res.status(500).json({
                message: "Fail delete all todo"
            })
        }
    }
}

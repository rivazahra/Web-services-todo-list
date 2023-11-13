const { Todo } = require("../models");
module.exports = {
  getAllTodo: async (req, res) => {
    const { id } = req.payload;
    const todos = await Todo.findAll({
      where: {
        user_id: id,
      },
    });
    try {
      return res.status(200).json({
        status: 200,
        message: "Data todo",
        data: todos,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Can't get data todo",
      });
    }
  },
  getTodoById: async (req, res) => {
    const { id } = req.payload;

    try {
      const data = await Todo.findOne({
        where: {
          id: req.params.id,
          user_id: id,
        },
      });

      if (!data) {
        return res.status(400).json({
          status: 400,
          message: "Todo not found",
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Data todo",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Can't get data todo",
      });
    }
  },

  createTodo: async (req, res) => {
    const { id } = req.payload;
    const { title, is_compeleted } = req.body;
    try {
        console.log("Create Todo Function Called"); // Tambahkan pernyataan log
        await Todo.create({ title, is_compeleted, user_id: id });
        res.status(201).json({
            message: "Success create todo",
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail create todo",
        });
    }
},
 

updateTodo: async (req, res) => {
    const { id } = req.payload;
    const { title, is_compeleted } = req.body;
    try {
        const data = await Todo.findOne({
            where: {
                id: req.params.id,
                user_id: id,
            },
        });

        if (!data) {
            return res.status(400).json({
                status: 400,
                message: "Todo not found",
            });
        }

        // Update hanya kolom yang diperlukan
        await Todo.update({
            title: title,
            is_compeleted: is_compeleted,
        }, {
            where: {
                id: req.params.id,
                user_id: id,
            },
        });

        res.status(201).json({
            message: "Success update todo",
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail update todo",
        });
    }
},

  deleteTodo: async (req, res) => {
    const { id } = req.payload;
    try {
      const data = await Todo.findOne({
        where: {
          id: req.params.id,
          user_id: id,
        },
      });

      if (!data) {
        return res.status(400).json({
          status: 400,
          message: "Todo not found",
        });
      }

      await Todo.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).json({
        message: "Success delete todo",
      });
    } catch (error) {
      res.status(500).json({
        message: "Fail delete todo",
      });
    }
  },
  deleteAllTodo: async (req, res) => {
    const { id } = req.payload;
    try {
      await Todo.destroy({
        where: {
          user_id: id,
        },
      });
      res.status(201).json({
        message: "Success delete all todo",
      });
    } catch (error) {
      res.status(500).json({
        message: "Fail delete all todo",
      });
    }
  },
};

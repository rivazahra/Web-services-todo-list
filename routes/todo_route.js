const express = require('express');
const route = express.Router();
const {getAllTodo,getTodoById,createTodo,updateTodo,deleteTodo,deleteAllTodo} = require('../controllers/todo.controller');
const { Todo } = require("../models");

route.get("/",getAllTodo);
route.get("/:id",getTodoById);
route.post("/",createTodo);
route.put("/:id",updateTodo);
route.delete("/:id",deleteTodo);
route.delete("/",deleteAllTodo);

module.exports=route
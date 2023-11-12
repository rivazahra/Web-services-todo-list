const express = require('express');
const route = express.Router()
const authRoutes = require('./auth_route')
const userRoute = require('./userRoute');
const verifyToken = require('../middleware/auth');
const todoRoutes = require("./todo_route")
route.get('/',(req,res)=>{
    res.json("selamat datang di express sequelieze migration")
})

route.use("/auth",authRoutes)
route.use("/user", verifyToken, userRoute);
route.use("/todos", verifyToken, todoRoutes);

// route.use("/todos",verifyToken,todoRoutes)
module.exports=route
const express = require('express');
const route = express.Router();
const {getAllUser} = require('../controllers/user.controller');
const { User } = require("../models");

route.get("/",getAllUser);
// route.get("/")
// route.get("/")

module.exports=route
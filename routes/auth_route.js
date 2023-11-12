const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const sequelieze = require("sequelize");
const { User } = require("../models");

const jwt = require("jsonwebtoken");

route.post("/login",async (req, res) => {
const login = await User.findOne({ where: { email : req.body.email } });
  
const checkEmail = await User.findOne({ where: { email: req.body.email } });
        if (!checkEmail) {
            return res.status(400).json({
                status: 400,
                message: "User not found",
            });
        }

        const matchPassword = bcrypt.compareSync(req.body.password, checkEmail.password);
        const token = jwt.sign({ id: checkEmail.id }, 'ryryryryry');
        if (!matchPassword) {
            return res.status(400).json({
                status: 400,
                message: "Incorrect password",
            })
        }
        else{
            res.json({
                message: "login success",
                token
            });
        };
    // biar tidak lanjut kebawah jika sudah eksekusi
    return;
  }
);

route.post("/regis", async (req, res) => {
  let data = req.body;
  console.log(data);

  let saltRounds = 10;
  let hashedPassword = bcrypt.hashSync(data.password, saltRounds);

  data.password = hashedPassword;
  // const newUser = await User.create(data);
  const newUser = await User.create(data);

  res.json({
    message: "berhasil dapat data user",
    data: newUser,
  });
});

module.exports = route

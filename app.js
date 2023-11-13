const express = require('express')
const app = express()
const allRoutes = require("./routes")

const sequelize = require('./config/config');
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use(allRoutes)
app.listen(PORT, () => {
    console.log("server " + PORT)
})


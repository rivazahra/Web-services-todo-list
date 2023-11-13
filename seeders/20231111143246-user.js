"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Users", [
            {
                name: "riri",
                email: "riri@gmail.com",
                password: bcrypt.hashSync("123", 10),
            },
           
            {
                name: "anggi",
                email: "anggi@gmail.com",
                password: bcrypt.hashSync("123", 10),
            },
            {
                name: "dika",
                email: "dika@gmail.com",
                password: bcrypt.hashSync("123", 10),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Users", null, {});
    },
};

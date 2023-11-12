'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
      name:'riri',
      email:'riri@gmail.com',
      password:'123',
    },
      {
      name:'ica',
      email:'ica@gmail.com',
      password:'123',
    },
      {
      name:'anggi',
      email:'anggi@gmail.com',
      password:'123',
    },
      {
      name:'anggi',
      email:'anggwi@gmail.com',
      password:'123',
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
   
      return queryInterface.bulkDelete('Users', null, {});
  }
  }
  

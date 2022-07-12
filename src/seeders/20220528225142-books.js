'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
    let books = []
    for(let i=0; i<500; i++){
      books.push({
        title: faker.name.findName(),
        description: "This is a test book number " + i,
        pages: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      }
      await queryInterface.bulkInsert('books', books, {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
      await queryInterface.bulkDelete('books', null, {});
     
  }
};


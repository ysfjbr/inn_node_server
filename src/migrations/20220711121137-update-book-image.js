'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    //  await queryInterface.createTable('books', { image: Sequelize.STRING });
     return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('books', 'image', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
      ]);
    });

  },

  async down (queryInterface, Sequelize) {    return queryInterface.sequelize.transaction(t => {
    return Promise.all([
      queryInterface.removeColumn('books', 'image', { transaction: t }),
    ]);
  });

  }
};

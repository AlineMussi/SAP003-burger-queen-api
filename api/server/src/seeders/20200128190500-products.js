'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Products', [
     {
     name:"café",
     price:2,
     type:"Principal",
     createdAt: new Date(),
     updatedAt: new Date()
   } 
  ], {});
    },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Products', null, {});
  }
};

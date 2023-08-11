const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const userData = [
      {
        name: 'Андрей',
        phone: '89000111922',
        password: await bcrypt.hash('12345678', 10),
        isAdmin: true,
      },
      {
        name: 'Алексей',
        phone: '89000444167',
        password: await bcrypt.hash('12345678', 10),
        isAdmin: false,
      },
    ];
    const users = userData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const categoriesData = [
      {
        title: 'Чаи',
      },
      {
        title: 'Крупы',
      },
      {
        title: 'Макароны',
      },
    ];
    const categories = categoriesData.map((category) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Categories', categories);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories');
  },
};

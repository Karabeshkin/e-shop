/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const categoriesData = [
      {
        title: 'Чай',
        image:'https://irecommend.ru/sites/default/files/product-images/10297/r30rMN1rZOnHs5GWKgAqvw.jpg'
      },
      {
        title: 'Крупы',
        image:'https://dietology.pro/upload/iblock/c8e/c8e11c762384bc0306ea8d545e93f512.jpeg'
      },
      {
        title: 'Макароны',
        image:'https://www.nyamburg.ru/wp-content/uploads/skolko-varit-makarony-680x270.jpg'
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

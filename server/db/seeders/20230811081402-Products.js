/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const productsData = [
      { 
        title: 'Зеленый чай',
        cost: 10000,
        description: 'вкусный',
        category_id: 1,
      },
      { 
        title: 'Черный чай',
        cost: 10000,
        description: 'вкусный',
        category_id: 1,
      },
      { 
        title: 'Желтый чай',
        cost: 10000,
        description: 'вкусный',
        category_id: 1,
      },
      { 
        title: 'Красный чай',
        cost: 10000,
        description: 'вкусный',
        category_id: 1,
      },
      {
        title: 'Синий чай',
        cost: 10000,
        description: 'не вкусный',
        category_id: 1,
      },
      {
        title: 'Индийский чай',
        cost: 10000,
        description: 'так себе',
        category_id: 1,
      },
      {
        title: 'Кускус',
        cost: 300,
        description: 'кушать можно , если вкусно приготовить',
        category_id: 2,
      },
      {
        title: 'Булгур',
        cost: 400,
        description: 'вкусная каша',
        category_id: 2,
      },
      {
        title: 'Булгур',
        cost: 400,
        description: 'вкусная каша',
        category_id: 2,
      },
      
      {
        title: 'Равиоли',
        cost: 5000,
        description: 'необычно',
        category_id: 3,
      },
      {
        title: 'Пенне',
        cost: 2000,
        description: 'что-то не понятное',
        category_id: 3,
      },
      {
        title: 'Спагетти',
        cost: 1500,
        description: 'по стандарту',
        category_id: 3,
      },
    ];

    const products = productsData.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products');
  },
};

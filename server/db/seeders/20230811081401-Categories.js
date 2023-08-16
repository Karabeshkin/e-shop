/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const categoriesData = [
      {
        title: 'Чай',
        image:
          'https://food.pibig.info/uploads/posts/2023-04/1680872995_food-pibig-info-p-vkusnii-listovoi-chai-pinterest-20.jpg',
      },
      {
        title: 'Крупы',
        image:
          'https://dietology.pro/upload/iblock/c8e/c8e11c762384bc0306ea8d545e93f512.jpeg',
      },
      {
        title: 'Макароны',
        image:
          'https://www.nyamburg.ru/wp-content/uploads/skolko-varit-makarony-680x270.jpg',
      },
      {
        title: 'Овощи',
        image:
          'https://www.med-practic.com/up/article/big/file_46245_3919020.jpg',
      },
      {
        title: 'Мясо',
        image:
          'https://worldclassmag.com/files/nodus_items/0005/2716/_cache/fit988x988-image-2716-1611310336.jpg',
      },
      {
        title: 'Напитки',
        image:
          'https://www.oum.ru/upload/iblock/0cc/0ccea2b5662747596098fcda8bd0eefd.jpg',
      },
      {
        title: 'Фрукты',
        image:
          'https://dobdocchel.ru/wp-content/uploads/2022/08/eae20c26143f31036d1acbcde61d5f75.jpg',
      },
      {
        title: 'Хлеб и выпечка',
        image:
          'https://milaclub.com/uploads/2018/06/milaclub-khleb.jpg',
      },
      {
        title: 'Рыба',
        image:
          'https://media.istockphoto.com/id/1156027693/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B2%D0%B5%D0%B6%D0%B8%D0%B9-%D1%81%D1%82%D0%B5%D0%B9%D0%BA-%D0%B8%D0%B7-%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D1%8F-%D1%81-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BC%D0%BE%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0%D0%BC%D0%B8-%D0%B8-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8C%D1%8E.jpg?s=612x612&w=0&k=20&c=1RJq0Y5ZmH0QfWc51_kSQzTSsD5pZdBlfALZwzLUMYE=',
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

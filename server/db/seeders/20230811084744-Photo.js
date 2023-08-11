module.exports = {
  async up(queryInterface) {
    const photoData = [
      {
        url: 'https://www.m24.ru/b/d/nBkSUhL2hFUum82wJr6BrNOp2Z318Ji-miDHnvyDoGuQYX7XByXLjCdwu5tI-BaO-42NvWWBK8AqGfS8kjIzIymM8G1N_xHb1A=-hbbDq2N9Bi-2C4pFFsqNg.jpg',
        product_id: 1,
      },
      {
        url: 'https://teacoffeepoint.ru/upload/medialibrary/3c1/3c158b58c66426fe0b9489afe8edebf7.jpg',
        product_id: 1,
      },
      {
        url: 'https://tea.ru/upload/blog/0920/14/2.jpg',
        product_id: 2,
      },
      {
        url: 'https://tea.ru/upload/blog/0920/14/1.jpg',
        product_id: 2,
      },
      {
        url: 'https://tea.ru/upload/blog/3105/19/1.jpg',
        product_id: 3,
      },
      {
        url: 'https://www.rusteaco.ru/images/26.11.19/ind2.jpg',
        product_id: 3,
      },
      {
        url: 'https://e0.edimdoma.ru/data/recipes/0005/4527/54527-ed4_wide.jpg?1628827347',
        product_id: 4,
      },
      {
        url: 'https://www.vsegdavkusno.ru/assets/images/recipes/2278/kuskus-s-ovoshhami.jpg',
        product_id: 4,
      },
      {
        url: 'https://cdnn21.img.ria.ru/images/07e4/0c/04/1587722182_0:0:2997:1686_1920x0_80_0_0_f59bb291206c5fe882b1887356fab781.jpg',
        product_id: 5,
      },
      {
        url: 'https://lifehacker.ru/wp-content/uploads/2017/01/Kak-varit-ris-osnovnye-pravila_1485289711.jpg',
        product_id: 6,
      },
      {
        url: 'https://www.chefmarket.ru/blog/wp-content/uploads/2018/11/ravioli-recept-s-foto-e1541952257341.jpg',
        product_id: 7,
      },
      {
        url: 'https://recipe-catalog.ru/wp-content/uploads/2018/01/milan-penne.jpg',
        product_id: 8,
      },
      {
        url: 'https://img.delo-vcusa.ru/2019/11/Spagetti-Putaneska.jpg',
        product_id: 9,
      },
    ];
    const photos = photoData.map((photo) => ({
      ...photo,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Photos', photos);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos');
  },
};

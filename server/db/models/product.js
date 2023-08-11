const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Comment, Favorite, Photo, OrderItem, Category }) {
      this.hasMany(Comment, { foreignKey: 'product_id' });
      this.hasMany(Favorite, { foreignKey: 'product_id' });
      this.hasMany(Photo, { foreignKey: 'product_id' });
      this.hasMany(OrderItem, { foreignKey: 'product_id' });
      this.belongsTo(Category, { foreignKey: 'category_id' });
    }
  }
  Product.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      cost: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};

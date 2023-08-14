const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Product, Order }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      this.belongsTo(Order, { foreignKey: 'order_id' });
    }
  }
  OrderItem.init(
    {
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: 'OrderItem',
    }
  );
  return OrderItem;
};

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ OrderItem, User }) {
      this.hasMany(OrderItem, { foreignKey: 'order_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Order.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      isFinished: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};

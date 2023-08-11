const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Order, Favourite }) {
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Order, { foreignKey: 'user_id' });
      this.hasMany(Favourite, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      phone: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};

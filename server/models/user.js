module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
  }, {});

  User.associate = (models) => {
    // associations can be defined here
    User.belongsTo(models.Flight, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return User;
};

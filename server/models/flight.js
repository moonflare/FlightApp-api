module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('Flight', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
  }, {});

  Flight.associate = (models) => {
    // associations can be defined here
    Flight.hasMany(models.User, {
      foreignKey: 'userId',
      as: 'users',
    });
  };

  return Flight;
};

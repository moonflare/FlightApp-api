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

  Flight.associate = () => {
    // associations can be defined here
  };

  return Flight;
};

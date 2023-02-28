const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('DogsTemperaments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dogId: DataTypes.INTEGER,
      temperamentId: DataTypes.INTEGER
    
  }, {timestamps: false});
};


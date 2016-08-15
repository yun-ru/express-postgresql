// Example model


module.exports = function (sequelize, DataTypes) {

  var People = sequelize.define('People', {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // People.hasMany(models.Comments);
      }
    }
  });

  return People;
};


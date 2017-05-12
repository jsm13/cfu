'use strict'

module.exports = function (sequelize, DataTypes) {
  const CfU = sequelize.define('CfU', {
    outOf: DataTypes.INTEGER,
    open: DataTypes.BOOLEAN,
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        CfU.hasMany(models.CfUScore)
      }
    }
  })

  return CfU
}

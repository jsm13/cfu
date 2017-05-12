'use strict'

module.exports = function (sequelize, DataTypes) {
  const CfU = sequelize.define('CfU', {
    outOf: DataTypes.INTEGER,
    open: DataTypes.BOOLEAN,
    title: DataTypes.STRING
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function (models) {
        CfU.hasMany(models.CfUScore)
      }
    }
  })

  return CfU
}

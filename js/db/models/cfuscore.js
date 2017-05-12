'use strict'

module.exports = function (sequelize, DataTypes) {
  const CfUScore = sequelize.define('CfUScore', {
    score: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function (models) {
        CfUScore.belongsTo(models.CfU)
      }
    }
  })

  return CfUScore
}

"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Options.belongsTo(models.questions, {
        foreignKey: "questionID",
        onDelete: "CASCADE",
      });
    }
  }
  Options.init(
    {
      option: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Options",
    }
  );
  return Options;
};

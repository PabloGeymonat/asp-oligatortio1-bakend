const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    userId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(300),
      allowNull: false,
      unique: "unq"
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lastnname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    isAdministrator: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    familyId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Familes',
        key: 'familyId'
      }
    }
  }, {
    sequelize,
    tableName: 'Users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "unq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "fk_Users_Familes1_idx",
        using: "BTREE",
        fields: [
          { name: "familyId" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categories', {
    categoryId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    billsLimit: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
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
    tableName: 'Categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
      {
        name: "fk_Category_Family_idx",
        using: "BTREE",
        fields: [
          { name: "familyId" },
        ]
      },
      {
        name: "unq",
        using: "BTREE",
        fields: [
          { name: "familyId" },
          { name: "name" },
        ]
      },
    ]
  });
};

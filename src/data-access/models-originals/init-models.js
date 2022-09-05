var DataTypes = require("sequelize").DataTypes;
var _Bills = require("./Bills");
var _Categories = require("./Categories");
var _Credentials = require("./Credentials");
var _Familes = require("./Familes");
var _Parameters = require("./Parameters");
var _Users = require("./Users");
var _invites = require("./invites");

function initModels(sequelize) {
  var Bills = _Bills(sequelize, DataTypes);
  var Categories = _Categories(sequelize, DataTypes);
  var Credentials = _Credentials(sequelize, DataTypes);
  var Familes = _Familes(sequelize, DataTypes);
  var Parameters = _Parameters(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var invites = _invites(sequelize, DataTypes);

  Bills.belongsTo(Categories, { as: "category", foreignKey: "categoryId"});
  Categories.hasMany(Bills, { as: "Bills", foreignKey: "categoryId"});
  Categories.belongsTo(Familes, { as: "family", foreignKey: "familyId"});
  Familes.hasMany(Categories, { as: "Categories", foreignKey: "familyId"});
  Users.belongsTo(Familes, { as: "family", foreignKey: "familyId"});
  Familes.hasMany(Users, { as: "Users", foreignKey: "familyId"});
  Bills.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(Bills, { as: "Bills", foreignKey: "userId"});
  Credentials.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasOne(Credentials, { as: "Credential", foreignKey: "userId"});
  invites.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(invites, { as: "invites", foreignKey: "userId"});

  return {
    Bills,
    Categories,
    Credentials,
    Familes,
    Parameters,
    Users,
    invites,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

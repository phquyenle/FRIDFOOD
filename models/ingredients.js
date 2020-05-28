module.exports = function(sequelize, DataTypes) {
  const Ingredient = sequelize.define("ingredients", {
    name: DataTypes.STRING,
    spoonacular_ID: DataTypes.INTEGER,
    image_link: DataTypes.STRING
  });
  return Ingredient;
};

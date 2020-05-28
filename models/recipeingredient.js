module.exports = function(sequelize, DataTypes) {
  const RecipeIngredient = sequelize.define("recipe_ingredient", {
    amount: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    recipes_ID: DataTypes.INTEGER,
    ingredients_ID: DataTypes.INTEGER
  });
  return RecipeIngredient;
};

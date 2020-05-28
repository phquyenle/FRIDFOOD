module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("recipe", {
    name: DataTypes.STRING,
    recipe_text: DataTypes.TEXT,
    spoonacular_ID: DataTypes.INTEGER,
    image_link: DataTypes.STRING
  });
  return Recipe;
};

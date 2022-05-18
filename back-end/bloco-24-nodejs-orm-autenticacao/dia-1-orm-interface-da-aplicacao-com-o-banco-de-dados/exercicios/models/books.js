const books = (sequelize, DataTypes) => {
  const books = sequelize.define("books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
  });

  return books;
};

module.exports = books;
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('file', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  })
  return File
}

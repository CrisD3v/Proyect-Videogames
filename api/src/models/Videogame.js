const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  /* Definición del modelo. */
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING(10)
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        max: 5
      }
    },
    platform: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      default: true,
      allowNull: false
    }
    },
    {
      timestamp: false
    });
};

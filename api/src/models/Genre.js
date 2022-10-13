const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    /* Definición de la tabla de géneros. */
    sequelize.define('genre', {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
       },
       name: {
        type: DataTypes.STRING,
        allowNull: false
       }
    },
    {
        timestamps: false
    })
}
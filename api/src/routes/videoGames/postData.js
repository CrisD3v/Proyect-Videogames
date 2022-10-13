const axios = require('axios')
require("dotenv").config();
const { API_KEY } = process.env
const { Videogame, Genre } = require('../../db')
const url = `https://api.rawg.io/api/games`

/**
 * Crea un nuevo videojuego y le agrega un género.
 * @param req - el objeto de solicitud
 * @param res - {
 * @devoluciones {
 * "msg": "SequelizeDatabaseError: el valor de clave duplicado viola la restricción única
 * \"Videogame_pkey\"\nDETALLE: Clave (id)=(1) ya existe.\n"
 * }
 * </código>
 */

const postDataVideoGames = async (req, res) => {
    try {

        /* Comprobación de si los datos son válidos.*/

        let { name, description, released, rating, platform, image, genre, createInDb } = req.body

        const validator =
            name && description && released && rating && platform && image ? true : false

        if (!validator) return res.status(400).send(`Some data is missing!`);

        /* Crear un nuevo videojuego y agregarle un género.*/

        name = name.trim()
        description = description.trim()
        image = image.trim()
        
        createInDb = true

        const obj = {
            name,
            description,
            released,
            rating,
            platform,
            image,
            createInDb
        }

        const newVg = await Videogame.create(obj)
        const vg_genre = await Genre.findAll({
            where: { name: genre }
        })
        newVg.addGenres(vg_genre)

        console.log(newVg)
        console.log(vg_genre)

       /* Devolver un mensaje al usuario de que el videojuego se creó con éxito.*/

        return res.status(201).send(`${name} videogame create successfully!`);
    } catch (error) {
        console.log(error)
        return res.status(404).json({ msg: error })
    }
}

module.exports = {
    postDataVideoGames
}
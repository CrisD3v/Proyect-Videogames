const axios = require("axios");
const { Genre } = require("../../db");
// require("dotenv").config();
const { API_KEY } = process.env;
const url = `https://api.rawg.io/api/genres`


/**
 * Verifica si la base de datos tiene algún género, si no es así, obtiene los géneros de la API y
 * Los guarda a la base de datos.
 * @param [db = false] - boolean
 * @returns una matriz de objetos.
 */

const loadGenres = async (db = false) => {
    try {

        /* Comprobación de si la base de datos tiene algún género, si no, obtiene los géneros de la API y luego
        los mapea a un objeto.*/

        let genres = []

        const genresExist = await Genre.findAll()

        if (!genresExist.lenght) {
            const api = await axios.get(`${url}?key=${API_KEY}`)
            genres = [...api.data.results]


            genres = genres.map(genre => {
                const { id, name } = genre

                const obj = {
                    id,
                    name
                }

                return obj
            })

        }

        if (db && !genresExist.length) await Genre.bulkCreate(genres)

        /* Devolviendo la matriz de géneros.*/

        return genres;

    } catch (error) {
        console.log(error)
    }
}


/**
 * Es una función que devuelve una promesa que se resuelve a una matriz de objetos.
 * @param req - el objeto de solicitud.
 * @param res - el objeto de respuesta
 * @returns una matriz de objetos.
 */

const getDataGenres = async (req, res) => {
    try {

        /* Llamando a la función LoadGenres () y asignando el resultado a la variable genres.*/
        const genres = await loadGenres(true);

        console.log(`Genres length: ${genres.length}`);

        /* Devolviendo la matriz de géneros.*/

        return res.status(200).send(genres);

    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    loadGenres,
    getDataGenres
}
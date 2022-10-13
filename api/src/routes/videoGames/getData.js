const axios = require('axios')
require("dotenv").config();
const { API_KEY } = process.env
const { Videogame, Genre } = require('../../db')
const url = `https://api.rawg.io/api/games`


// Obtener la API de datos RAW
/**
 * Obtiene los primeros 15 resultados de la API, luego verifica si la cantidad de juegos es mayor a 15,
 * si lo es, obtiene la siguiente página de la API y la agrega a los primeros 15 resultados, y hace
 * esto hasta que alcanza la cantidad de juegos que el usuario quiere
 * @param req - solicitud
 * @param res - El objeto de respuesta.
 * @returns Una matriz de objetos.
 */
const getDataApi = async (req, res) => {
    let videoGames
   /* El número de juegos que el usuario quiere obtener. */
    let quantity = 100
    try {

        let api = await axios.get(`${url}?key=${API_KEY}`)
        videoGames = [...api.data.results]

        /* Al verificar si la cantidad de juegos es mayor a 15, si lo es, obtiene la siguiente página
        de la API y la agrega a los primeros 15 resultados, y hace esto hasta que alcanza la
        cantidad de juegos que el usuario desea. */

        if (quantity > 15) {

            let auxApi = api

            for (let i = 0; videoGames.length < quantity; i++) {

                let apiV2 = await axios.get(auxApi.data.next)
                auxApi = apiV2

                if (quantity - videoGames.length < 15) {
                    videoGames = [
                        ...videoGames,
                        ...apiV2.data.results.slice(0, residue)
                    ]
                    break
                }

                videoGames = [...videoGames, ...apiV2.data.results]
            }
        }

        /* Desestructurar el objeto y asignar los valores a las variables. */

        videoGames = videoGames.map((mapper) => {
            const {
                id,
                name,
                genres,
                rating,
                platforms,
                background_image: image,
            } = mapper;
            const obj = {
                id,
                name,
                genres: genres ? genres.map((g) => g.name) : null,
                rating,
                platforms: platforms ? platforms.map((p) => p.platform.name) : null,
                image,
            };

            return obj;
        });

        /* Devolviendo la matriz de objetos. */

        return videoGames
    } catch (error) {
        throw new Error(`Error getting characters from API: ${error}`);
    }
}

/**
 * Obtiene todos los videojuegos de la tabla de videojuegos y todos los géneros de la tabla de géneros
 * y luego los une.
 * @param req - solicitud
 * @param res - el objeto de respuesta
 * @returns Una variedad de videojuegos con sus géneros.
 */
const getDataDB = async (req, res) => {
    try {
        let videogamesDb = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: { attributes: [], }
            }
        })

        return videogamesDb

    } catch (error) {
        console.log(error)
    }
}

//GET DATA BY NAME
/**
 * Toma un nombre y una cantidad, y devuelve una matriz de videojuegos que coinciden con el nombre, con
 * una longitud de la cantidad
 * @param name - El nombre del videojuego que quieres buscar.
 * @param quantity - número de videojuegos a devolver
 * @returns Una matriz de objetos.
 */
const getDataByName = async (name, quantity) => {

    /* Obtener los datos de la API y luego dividirlos en la cantidad que el usuario desea. */

    let videogamesByName = await axios(
        `${url}?search=${name.trim()}&key=${API_KEY}`
    );

    videogamesByName = videogamesByName.data.results.slice(0, quantity);

   /* Devolviendo la variable videogamesByName. */
   
    return videogamesByName;
};

//GET ALL DATA
/**
 * Obtiene todos los datos de la base de datos y la API, y si hay un parámetro de consulta, filtra los
 * datos por nombre y los devuelve.
 * @param req - el objeto de solicitud
 * @param res - el objeto de respuesta
 * @returns Una matriz de objetos.
 */
const getAllData = async (req, res) => {

    /* Obtener el nombre de la cadena de consulta. */
    let { name } = req.query

    const apiVideoGames = await getDataApi();
    const dbVideoGames = await getDataDB();

    /* Filtrar los datos por nombre. */
    if (name) {
        name.toLowerCase().trim
        let quantity = 15

        let nameDb = dbVideoGames.filter(game => {
            game.name.toLowerCase().includes(name)
        })

        if (nameDb) quantity = 15 - nameDb.length

        let videogames = await getDataByName(name, quantity);

       

        /* Una función de mapa que devuelve un objeto con las propiedades del juego. */
        
        videogames = videogames.map(game => {
            const { id, name, background_image: image, genres, rating } = game;

            const obj = {
                id,
                name,
                image,
                genres: genres.map((g) => g.name),
                rating
            }

            return obj
        })

        nameDb = nameDb.map(game => {
            const { id, name, background_image: image, genres, rating } = game;

            const obj = {
                id,
                name,
                image,
                genres: genres.map((g) => g.name),
                rating
            }

            return obj
        })

        videogames = [...nameDb, ...videogames]

        if (!videogames.length) videogames.push('Error')

        return res.status(200).send(videogames)
    }

  /* Concatenando las dos matrices. */

    const allVideoGames = [...apiVideoGames, ...dbVideoGames]

   /* Devolviendo la matriz de objetos. */

    return res.send(allVideoGames)
}

//GET DATA BY ID
/**
 * Toma como parámetro un idGames, luego hace una solicitud de axios a la API, luego devuelve un objeto
 * con los datos del juego.
 * @param idGames - El ID del juego del que quieres obtener datos.
 * @returns Un objeto con los datos del juego.
 */
const getDataApiById = async (idGames) => {
    try {

       /* Obtener los datos de la API y devolver un objeto con los datos del juego. */

        let videoGames = await axios.get(`${url}/${idGames}?key=${API_KEY}`)
        if (!videoGames) return `Game with id : ${Id} Not Found `

        const {
            id,
            name,
            background_image: image,
            rating,
            genres,
            description_raw: description,
            released,
            platforms
        } = videoGames.data



        const objVideogame = {
            id,
            name,
            image,
            rating,
            genres: genres.map((g) => g.name),
            description,
            released,
            platforms: platforms ? platforms.map((p) => p.platform.name) : null,
        };

      /* Devolviendo el objeto con los datos del juego. */

        return objVideogame;

    } catch (error) {
        console.log(`An Error ocurred, ${error}`);
        return ["Error"];
    }
}

/**
 * Si se pasa el parámetro idGames, buscará en la base de datos el parámetro idGames, si lo encuentra,
 * devolverá los datos, si no lo encuentra, buscará el parámetro idGames en la API, si lo encuentra,
 * devolverá los datos, si no lo encuentra, devolverá un error.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 * @returns el objeto de respuesta.
 */
//GET ALL DATA BY ID
const getDataById = async (req, res) => {
    const { idGames } = req.params
    try {
        if (idGames) {
            const dbVideoGames = await getDataDB();
            const videoGamesFoundDb = dbVideoGames.find(
                game => game.id === idGames
            )

            if (videoGamesFoundDb) return res.status(200).send(videoGamesFoundDb);

            const videoGamesFoundApi = await getDataApiById(idGames);

            /* Devolviendo la respuesta con el código de estado 200 y los datos del videojuego
            encontrados en la API. */
            
            return res.status(200).send(videoGamesFoundApi);
        }
    } catch (error) {
        return res.status(404).send(error);
    }
}

module.exports = {
    getAllData,
    getDataById,
}
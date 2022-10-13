const axios = require("axios");
const { Platform } = require("../../db");
// require("dotenv").config();
const { API_KEY } = process.env;
const url = `https://api.rawg.io/api/platforms/lists/parents`


/**
 * Es una función asíncrona que hace una llamada de API a la API RAW, luego mapea los resultados a un
 * matriz de nombres de plataforma y luego envía la matriz de nombres de plataforma al cliente.
 * @param req - solicitud
 * @param res - el objeto de respuesta
 * @returns una variedad de cuerdas.
 */
const getDataPlatforms = async (req, res) => {
    try {

        const apiresult = await axios.get(`${url}?key=${API_KEY}`)
        let apivgplat = apiresult.data.results.map(p => p.name)

        return res.status(200).send(apivgplat);

    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    getDataPlatforms
}
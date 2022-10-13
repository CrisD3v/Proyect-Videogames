import axios from 'axios'
import {
  GET_VIDEOGAMES,
  GET_GENRES,
  FILTER_BY_GENRE,
  FILTER_BY_API_OR_DB,
  ALPHABETICAL_SORT,
  SORT_BY_RATING,
  GET_VIDEOGAMES_BY_NAME,
  GET_DETAIL_VIDEOGAME,
  RESET_DETAIL,
  GET_PLATFORMS,
  GO_BACK_HOME,
  RESET_VIDEOGAMES,
  MEMORY_CURRENT_PAGE,
  FROM_BY_NAME_TO_ALLVIDEOGAMES,
} from "./types/index";

const LOCALHOST = "http://localhost:3001";
const BASE_URL = process.env.REACT_APP_API;

/**
 * Es una función async que devuelve una función que envía una acción con una carga útil del
 * Los datos de respuesta de la solicitud de Axios obtienen.
 * @returns un objeto con una propiedad llamada Tipo y una propiedad llamada carga útil.
 */

export function getVideogames() {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL || LOCALHOST}/videogames`)
    dispatch({ type: GET_VIDEOGAMES, payload: res.data });
  }
}

/**
 * Es una función async que devuelve una función que envía una acción con una carga útil del
 * Los datos de respuesta de la solicitud de Axios obtienen.
 * @returns un objeto con un tipo y una carga útil.
 */

export function getGenres() {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL || LOCALHOST}/genres`)
    dispatch({ type: GET_GENRES, payload: res.data })
  }
};

/**
 * Es una función async que devuelve una función que toma una función de despacho como argumento.
 *
 * La función que toma una función de despacho como argumento hace una solicitud de Axios al servidor y
 * Luego envía una acción al reductor.
 *
 * La acción que se envía al reductor es un objeto con un tipo y una carga útil.
 *
 * El tipo es una cadena que se define en el archivo de constantes.
 *
 * La carga útil son los datos que se devuelven de la solicitud AXIOS.
 *
 * El reductor luego toma la acción y actualiza el estado.
 *
 * El estado se pasa al componente como accesorios.
 *
 * El componente luego representa los datos.
 *
 * El componente también tiene una función que envía la acción al reductor.
 *
 * La función que envía la acción al reductor
 * @returns un objeto con un tipo y una carga útil.
 */

export function getPlatforms() {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL || LOCALHOST}/platforms`)
    dispatch({
      type: GET_PLATFORMS,
      payload: res.data
    })
  }
}

/**
 * Es una función asíncrona que toma una función de despacho como parámetro, y luego hace un axios
 * Solicitar al servidor, y luego envía una acción al reductor con los datos de respuesta de
 * el servidor.
 * @param nombre - el nombre del videojuego
 * @returns un objeto con un tipo y una carga útil.
 */
export function getVideogamesByName(name) {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL || LOCALHOST}/videogames?name=${name}`)
    dispatch({
      type: GET_VIDEOGAMES_BY_NAME,
      payload: res.data
    })
  }
}

/**
 * Es una función async que toma una identificación, hace una solicitud al servidor y luego envía un
 * Acción con los datos de respuesta como carga útil.
 * @param id - la identificación del videojuego
 * @returns una función async que toma el despacho como parámetro.
 */
export function getDetailVideogame(id) {
  return async function (dispatch) {
    const res = await axios.get(`${BASE_URL || LOCALHOST}/videogames/${id}`)
    dispatch({
      type: GET_DETAIL_VIDEOGAME,
      payload: res.data
    })
  }
}


/**
 * Se necesita una carga útil y luego envía una solicitud de búsqueda al servidor, y luego devuelve la respuesta
 * @param payload  - {
 */
export const postVideogame = (payload) => (dispatch) => {
  fetch(`${BASE_URL || LOCALHOST}/videogames`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const filterByGenre = (payload) => ({ type: FILTER_BY_GENRE, payload });

export const filterByApiOrDb = (payload) => ({
  type: FILTER_BY_API_OR_DB,
  payload,
});

export const alphabeticalSort = (payload) => ({
  type: ALPHABETICAL_SORT,
  payload,
});

export const sortByRating = (payload) => ({
  type: SORT_BY_RATING,
  payload,
});

export const resetDetail = () => ({ type: RESET_DETAIL });

export const goBackHome = () => ({ type: GO_BACK_HOME });

export const resetVideogames = () => ({ type: RESET_VIDEOGAMES });

export const fromByNameToAllVideogames = () => ({
  type: FROM_BY_NAME_TO_ALLVIDEOGAMES,
});

export const memoryCurrentPage = (page) => ({
  type: MEMORY_CURRENT_PAGE,
  payload: page,
});
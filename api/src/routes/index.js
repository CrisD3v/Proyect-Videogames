const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGames = require('./videoGames/videoGames.route')
const genres = require('./Genres/genres.route')
const platforms = require('./Platforms/platforms.route')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videoGames)
router.use('/genres', genres)
router.use('/platforms', platforms)
module.exports = router;

const { Router } = require('express');

const router = Router();

const {getDataGenres} = require('./getData')

router.get('/', getDataGenres )

module.exports = router;
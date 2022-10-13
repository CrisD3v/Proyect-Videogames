const { Router } = require('express');

const router = Router();

const {
    getAllData,
    getDataById,
} = require('./getData')

const {postDataVideoGames} = require('./postData')

router.get('/', getAllData )

router.get('/:idGames', getDataById )


router.post('/', postDataVideoGames)

module.exports = router;
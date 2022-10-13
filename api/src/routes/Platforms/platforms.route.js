const { Router } = require("express");

const router = Router();

const {getDataPlatforms} = require('./getData')

router.get('/', getDataPlatforms);

module.exports = router;
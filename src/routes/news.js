const express = require('express');
const router = express.Router();
const dataService = require('../services/data');

router.get('/', (req, res) => {
  return res.status(200).send(dataService.getNewsData());
})

module.exports = router;

/**
 * Other Anaylitics APIs in future will come here.
 */
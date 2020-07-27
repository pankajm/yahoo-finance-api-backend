const express = require('express');
const router = express.Router();
const dataService = require('../services/data');

router.get('/', (req, res, next) => {
  try {
    return res.status(200).send(dataService.getNewsData());
  }
  catch (ex) {
    next(ex);
  }
})

module.exports = router;

/**
 * Other News APIs in future will come here.
 */
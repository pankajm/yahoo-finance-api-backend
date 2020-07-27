const express = require('express');
const router = express.Router();
const dataService = require('../services/data');

router.get('/', (req, res, next) => {
  try {
    return res.status(200).send(dataService.getAnalysisData());
  }
  catch (ex) {
    next(ex);
  }
})

module.exports = router;

/**
 * Other Anaylitics APIs in future will come here.
 */
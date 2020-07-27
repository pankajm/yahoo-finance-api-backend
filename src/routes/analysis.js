const express = require('express');
const router = express.Router();
const dataService = require('../services/data');

router.get('/', (req, res) => {
  try {
    return res.status(200).send(dataService.getAnalysisData());
  }
  catch (ex) {
    return res.status(500).send('Error occured in retriving data');
  }
})

module.exports = router;

/**
 * Other Anaylitics APIs in future will come here.
 */
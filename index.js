const express = require('express');
const app = express();
const newsApi = require('./src/routes/news');
const analysisApi = require('./src/routes/analysis');
const getYahooFinanceData = require("./src/cron/yahoo-finance");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));

/** Application APIs  */

app.use('/api/news', newsApi);
app.use('/api/analysis', analysisApi);

/**
 * Following cron will fetch data from Yahoo finance APIs on RapidAPI
 * And save it in application memory 
 * in production these should be called with cron job to get periodic updated data
 */

getYahooFinanceData();

process.on('uncaughtException', function (ex) {
  console.log(ex.message);
})

process.on('unhandledRejection', function (ex) {
  console.log(ex.message);
})

const express = require('express');
const app = express();
const newsApi = require('./src/routes/news');
const analysisApi = require('./src/routes/analysis');
const yahooFinanceApi = require('./src/api/yahoo-finance');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));

/** Application APIs  */

app.use('/api/news', newsApi);
app.use('/api/analysis', analysisApi);

/**
 * Following two call will fetch data from Yahoo finance APIs on RapidAPI
 * And save it in application memory 
 * in production these should be called with cron job to get periodic updated data
 */

yahooFinanceApi.getAnalysis();
yahooFinanceApi.getNews();

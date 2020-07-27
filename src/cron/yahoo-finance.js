const yahooFinanceApi = require('../api/yahoo-finance');

module.exports = async function getYahooFinanceData() {
  await yahooFinanceApi.getAnalysis();
  await yahooFinanceApi.getNews();
  console.log("Cron completed !");
}
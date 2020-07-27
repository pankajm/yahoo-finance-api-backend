/** This module contains Yahoo finance APIs fetching data from RapidAPI 
 * Currently being used by cron. Can be consumed by any other service.
*/

const httpService = require("../services/httpService")
const dataService = require("../services/data");
const apiConstants = require("../constants/api")

async function getYahooFinanceNews() {
  try {
    const { data } = await httpService.get(apiConstants.YAHOO_FINANCE_NEWS_API_ENDPOINT);
    return dataService.setNewsData(data);
  }
  catch (ex) {
    console.log(ex);
    return;
    // In production this should be logged with logger module or 
    // remote logging service like sentry
  }
}

async function getYahooFinanceAnalysis() {
  try {
    const { data } = await httpService.get(apiConstants.YAHOO_FINANCE_ANALYSIS_API_ENDPOINT);
    return dataService.setAnalysisData(data);
  }
  catch (ex) {
    console.log(ex);
    return;
  }
}

module.exports = {
  getNews: getYahooFinanceNews,
  getAnalysis: getYahooFinanceAnalysis
}
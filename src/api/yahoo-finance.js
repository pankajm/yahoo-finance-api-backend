/** This module contains Yahoo finance APIs fetching data from RapidAPI */


const httpService = require("../services/httpService")
const dataService = require("../services/data");
const apiConstants = require("../constants/api")

async function getYahooFinanceNews() {
  try {
    console.log("Getting news data");
    const { data } = await httpService.get(apiConstants.YAHOO_FINANCE_NEWS_API_ENDPOINT);
    console.log("got news api response");
    return dataService.setNewsData(data);
  }
  catch (ex) {
    console.log(ex);
    // In production this should be logged with logger module or 
    // remote logging service like sentry
  }
}

async function getYahooFinanceAnalysis() {
  try {
    console.log("Getting analytics data");
    const { data } = await httpService.get(apiConstants.YAHOO_FINANCE_ANALYSIS_API_ENDPOINT);
    console.log("got analytics api response");
    return dataService.setAnalysisData(data);
  }
  catch (ex) {
    console.log(ex);
  }
}

module.exports = {
  getNews: getYahooFinanceNews,
  getAnalysis: getYahooFinanceAnalysis
}
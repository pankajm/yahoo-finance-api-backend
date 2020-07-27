const httpService = require("../services/httpService")
const dataService = require("../services/data");

const yahoo_finance_news_apiEndpoint = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&&category=NBEV"
const yahoo_finance_analysis_apiEndpoint = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=AMRN"

async function getYahooFinanceNews() {
  try {
    console.log("Getting news data");
    const { data } = await httpService.get(yahoo_finance_news_apiEndpoint);
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
    const { data } = await httpService.get(yahoo_finance_analysis_apiEndpoint);
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
/** Data service, currently serving data from application memory. 
 * In production data will be stored and fetched from DB or cache like Redis
 */

let analysisData = {}
let newsData = {}

function getAnalysisData() {
  return analysisData;
}

function setAnalysisData(data) {
  analysisData = { ...data };
  return;
}

function getNewsData() {
  return newsData;
}

function setNewsData(data) {
  newsData = { ...data };
  return;
}

module.exports = {
  getAnalysisData,
  setAnalysisData,
  getNewsData,
  setNewsData
}
const axios = require("axios");
const apiConstants = require("../constants/api")

axios.defaults.headers.common["x-rapidapi-host"] = apiConstants.RAPIDAPI_HOST;
axios.defaults.headers.common["x-rapidapi-key"] = apiConstants.RAPIDAPI_KEY;
// This key should read from environment variable in production 

axios.defaults.headers.common["useQueryString"] = true;

module.exports = {
  get: axios.get
};


const axios = require("axios");
const apiConstants = require("../constants/api")

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast("An unexpected error occurred");
  }

  return Promise.reject(error);
});

axios.defaults.headers.common["x-rapidapi-host"] = apiConstants.RAPIDAPI_HOST;
axios.defaults.headers.common["x-rapidapi-key"] = apiConstants.RAPIDAPI_KEY;
axios.defaults.headers.common["useQueryString"] = true;

module.exports = {
  get: axios.get
};


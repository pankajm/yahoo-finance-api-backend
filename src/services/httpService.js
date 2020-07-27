const axios = require("axios");

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

axios.defaults.headers.common["x-rapidapi-host"] = "apidojo-yahoo-finance-v1.p.rapidapi.com";
axios.defaults.headers.common["x-rapidapi-key"] = "a978ca033dmsh15453c32baeb978p166a9ajsn9c91965b02b4";
axios.defaults.headers.common["useQueryString"] = true;

module.exports = {
  get: axios.get
};


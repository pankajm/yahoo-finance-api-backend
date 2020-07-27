/**
 * catches error in req res cycle
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 */
module.exports = (err, req, res, next) => {
  console.log(err); // Should be logged with error module in production.
  return res.status(500).send(err);
}
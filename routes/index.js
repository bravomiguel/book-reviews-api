module.exports = function (app) {
  // base endpoint components
  const API_ENDPOINT = '/api';
  const API_VERSION = '/v1';
  // books route
  app.use(`${API_ENDPOINT}/${API_VERSION}/books`, require('./books.routes'));
  // any other malformed route
  app.all("*", (req, res) => {
    res.sendStatus(404);
  });
};
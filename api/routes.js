'use strict';

var controller = require('./controller');

const checkApiKey = (req, res, next) => {
    if(req.params.apikey === process.env.API_KEY)
    {
      console.log("Authorized request:"
      +"\nTime: "+ (new Date).toISOString()
      +"\nip: "+ req.ip
      +"\noriginalUrl: "+ req.originalUrl
      +"\n");
      next();
    }
    else
    {
      console.log("Rejected request:"
      +"\nip: "+ req.ip
      +"\noriginalUrl: "+ req.originalUrl
      +"\n");
      res.status(401).send({ status: 'Unauthorized' });
    }
};


module.exports = function(app) {
  app.route('/')
    .get(controller.home);
  app.route('/about')
    .get(controller.about);
  app.route('/operations/:apikey/sum/:num1/:num2')
    .get(checkApiKey, controller.sum);
  app.route('/operations/:apikey/subtract/:num1/:num2')
    .get(checkApiKey, controller.subtract);
  app.route('/operations/:apikey/multiply/:num1/:num2')
    .get(checkApiKey, controller.multiply);
  app.route('/operations/:apikey/divide/:num1/:num2')
    .get(checkApiKey, controller.divide);
};
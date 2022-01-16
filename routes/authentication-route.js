module.exports = app => {

  const controller = require('../controllers/authentication-controller')();    

  require('dotenv-safe').config();

  const api = `${process.env.API}`
  

    app.route(`${api}auth`)
      .get(controller.list);

  }
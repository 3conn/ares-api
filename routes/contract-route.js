module.exports = app => {
    const controller = require('../controllers/contract-controller')();
    require('dotenv-safe').config();

    const api = `${process.env.API}`
    
    app.route(`${api}contract`)
      .get(controller.findall);
  }
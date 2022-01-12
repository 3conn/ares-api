module.exports = app => {
    //const controller = require('../controllers/partner')();
    const controller = app.controllers.partner;
  
    app.route('/api/v1/partner')
      .get(controller.list);

    app.route('/api/v1/partner/:id')
      .get(controller.findbyid);
  }
module.exports = app => {
    const controller = app.controllers.contract;
  
    app.route('/api/v1/contract')
      .get(controller.list);
  }
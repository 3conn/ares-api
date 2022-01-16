module.exports = app => {

  const controller = require('../controllers/partner-controller')();

  require('dotenv-safe').config();

  const api = `${process.env.API}`

  /**
   * Obtem todos os parceiros
   */
  app.route(`${api}partner`)
    .get(controller.findAll);

  /**
  * Obtem a o parceiro informado pelo ID
  */
  app.route('/api/v1/partner/:id')
    .get(controller.findbyid);
    
    /**
     * Cria um novo registro
     */
    app.route('/api/v1/partner')
    .post(controller.create);
    
    /**
    * Obtem a o parceiro informado pelo ID
    */
    app.route('/api/v1/partner/:id')
      .put(controller.update);
  }
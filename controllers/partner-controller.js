module.exports = () => {

  const DB = require('../data/partner-data');
  const controller = {};

  controller.findAll = (req, res) => {
    (async () => {

      const findall = await DB.findAll();
      res.status(200).json(findall);
    })();
  };

  controller.create = (req, res) => {
    (async () => {

      const created = await DB.create(req.body);

      res.status(200).json(created);
    })();
  }

  controller.findbyid = (req, res) => {
    (async () => {

      const findbyid = await DB.findbyid(req.params.id);
      res.status(200).json(findbyid);
    })();
  };

  controller.update = (req, res) => {
    (async () => {
      console.log('atualizando...')
      const update = await DB.updatebyid(req.params.id, req.body);
      res.status(200).json(update);
    })();
  };

  return controller;

}
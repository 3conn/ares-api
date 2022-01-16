module.exports = () => {

  const DB = require('../data/contract-data');
  const controller = {};

  controller.findall = (req, res) => {
    (async () => {

      const findall = await DB.findAll();
      res.status(200).json(findall);
    })();
  };

  return controller;
}

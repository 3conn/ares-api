module.exports = () => {

    const DB = require('../data/users-data');
    const controller = {};
  
    controller.list = (req, res) => {
      (async () => {
  
        const findall = await DB.findAll();
        res.status(200).json(findall);
      })();
    };
  
    return controller;
  }
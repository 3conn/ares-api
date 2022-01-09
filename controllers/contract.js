module.exports = () => {
    const DB = require('../data/contract.json');
    const controller = {};
  
    controller.list = (req, res) => res.status(200).json(DB);
  
    return controller;
  }
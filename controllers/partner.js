module.exports = () => {
    const DB = require('../data/partner.json');
    const controller = {};
  
    controller.list = (req, res) => res.status(200).json(DB);
  
    controller.findbyid = (req, res, next) => res.status(200).send({message: "uiuiui"});

    return controller;
  }
const { SuperPower } = require('../models/superpower');
const createError = require('http-errors');

module.exports.createSuperPower = async (req, res, next) => {
  try {
    const { body } = req;
    const updatedPower = await SuperPower.create(body);
    if(!updatedPower){
       return next(createError(400, 'Super power can`t be create')); 
    }
    res.status(200).send(updatedPower);
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperPower = async (req, res, next) => {
  try {
    const { heroInstance } = req;
    const superPowers = await heroInstance.getSuperPowers({ returning: true });
    if (!superPowers) {
      return next(createError(404, 'Super powers not found'));
    }
    res.status(200).send(SuperPowers);
  } catch (err) {
    next(err);
  }
};

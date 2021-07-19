const createError = require('http-errors');
const {SuperPower} = require('../models');

module.exports.createPower = async (req, res, next) => {
  try {
    const { body, heroInstance } = req;
    const updatedPower = await heroInstance.createSuperPower(body);
    if (!updatedPower) {
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
    const superPowers = await heroInstance.getSuperPowers();
    if (!superPowers) {
      return next(createError(404, 'Super powers not found'));
    }
    res.status(200).send(superPowers);
  } catch (err) {
    next(err);
  }
};

module.exports.getPower = async (req, res, next) => {
  try {
    const {
      heroInstance,
      params: { idPower }
    } = req;
    const superPower = await heroInstance.getSuperPowers({
      where: { id: idPower }
    });
    if (!superPower) {
      return next(404, 'Super power not found');
    }
    res.status(200).send(superPower);
  } catch (err) {
    next(err);
  }
};

module.exports.updatePower = async (req, res, next) => {
  try {
    const {
      params: { idPower },
      body
    } = req;
    
    console.log(SuperPower)
    const [rowsCount, [updatedPower]] = await SuperPower.update(body, {
      where: { id: idPower },
      returning: true
    });  
    if (rowsCount !== 1) {
      return next(createError(400, 'Super power can`t be update'));
    }
    res.status(200).send(updatedPower);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperPower = async (req, res, next) => {
  try {
    const {
      params: { idPower },
    } = req;
    const supPower = await SuperPower.findByPk(+idPower);
    const deletedPower = await supPower.destroy({ returning: true });
    if (!deletedPower) {
      return next(createError(400, 'Super power can`t be delete'));
    }
    res.status(200).send(supPower);
  } catch (err) {
    next(err);
  }
};


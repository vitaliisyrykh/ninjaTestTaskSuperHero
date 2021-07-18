const { SuperHero } = require('../models');
const createError = require('http-errors');

module.exports.checkHero = async (req, res, next) => {
  try {
    const {
      params: { idHero },
    } = req;

    const heroInstance = await SuperHero.findByPk(idHero);
    if (!heroInstance) {
      return next(createError(404, ' Hero not found'));
    }
    req.heroInstance = heroInstance;
   next()
  } catch (err) {
    next(err);
  }
};
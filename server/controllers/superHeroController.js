const { SuperHero, Image, SuperPower } = require('../models');
const createError = require('http-errors');

module.exports.createSuperHero = async (req, res, next) => {
  try {
    const {
      body: { superPowers },
      body,
      files
    } = req;
    console.log(body);
    const createdHero = await SuperHero.create(body);
    if (files.length) {
      const imgs = files.map(file => ({ path: file.path, hero_id: createdHero.id }));
      await Image.bulkCreate(imgs, { returning: true });
    }else{return}
    /* if (superPowers.length) {
      const power = superPowers.map(powerObj => ({
        name: powerObj.name,
        discription: powerObj.discription,
        hero_id: createdHero.id
      }));
      await SuperPower.bulkCreate(power, { returning: true });
    } */

    if (!createdHero) {
      next(createError(400, ' Hero can`t created'));
    }
    res.status(200).send(createdHero);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllHeroes = async (req, res, next) => {
  try {
    const { pagination } = req;
    const allSuperHero = await SuperHero.findAll({
      ...pagination
    });
    if (!allSuperHero) {
      return next(createError(404, 'Heroes not found'));
    }
    res.status(200).send(allSuperHero);
  } catch (err) {
    next(err);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const { heroInstance } = req;
    res.status(200).send(heroInstance);
  } catch (err) {
    next(err);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { idHero }
    } = req;
    const [rowsCount, [updatedHero]] = await SuperHero.update(body, {
      where: { id: idHero },
      returning: true
    });
    if (rowsCount === 0) {
      return next(createError(404, 'Not found'));
    }
    res.status(200).send(updatedHero);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { idHero }
    } = req;
    const deletedHeroe = await SuperHero.destroy({
      where: { id: idHero },
      returning: true
    });
    if (!deletedHeroe) {
      return next(createError(400, 'Hero can`t delete'));
    }
    res.status(200).end();
  } catch (err) {
    next(err);
  }
};

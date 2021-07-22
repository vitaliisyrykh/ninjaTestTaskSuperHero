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
    const heroWithData = await SuperHero.findAll({
      where: { id: createdHero.id },
      include:[{
        model: SuperPower,
        attributes:["id", "name"],
        as:"SuperPowers"
      },
    {
      model: Image,
      attributes:["path"],
      as: "Images"
    }]
    });
    if (!createdHero) {
      next(createError(400, ' Hero can`t created'));
    }
    res.status(200).send({ data: heroWithData });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllHeroes = async (req, res, next) => {
  try {
    const { pagination } = req;
    const heroes = await SuperHero.findAll({
      ...pagination,
      attributes: { exclude: ['updatedAt', 'createdAt'] },
      include:[{
        model: SuperPower,
        attributes:["id", "name", "discription"],
        as:"SuperPowers"
      },
      {
        model: Image,
        attributes:["path","id"],
        as: "Images"
      }]
    });
    if (!heroes) {
      return next(createError(404, 'Heroes not found'));
    }
    res.status(200).send(heroes);
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
    console.log(body);
    const [rowsCount, [updatedHero]] = await SuperHero.update(body, {
      where: { id: idHero },
      returning: true,
      
    });

    const [updatedHeroWithData] = await SuperHero.findAll({
      where: { id: updatedHero.id },
      include:[{
        model: SuperPower,
        attributes:["id", "name"],
        as:"SuperPowers"
      },
      {
        model: Image,
        attributes:["path"],
        as: "Images"
      }]
    });
    if (rowsCount === 0) {
      return next(createError(404, 'Not found'));
    }
    console.log(updatedHeroWithData);
    res.status(200).send(updatedHeroWithData);
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

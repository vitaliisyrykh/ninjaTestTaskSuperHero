const { SuperHero } = require('../models');

module.exports.createSuperHero = async (req, res, next) => {
  try {
    const { body } = req;
    const createdHero = await SuperHero.create(body);
    res.status(200).send(createdHero)
  } catch (error) {
    next(error)
  }
};

module.exports.getAllHeroes = async (req, res, next) => {
  try {
    const { pagination } = req;
    const allSuperHero = await SuperHero.findAll({
      attributes: { exclude: ['createdAt'] },
      ...pagination,
      returning:true
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
    const { params:{idHero} } = req;
    const hero = await SuperHero.findOne({where:{id : idHero}});
    res.status(200).send(hero);
  } catch (err) {
    next(err);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { idHero },
    } = req;
    const [rowsCount, [updatedHero]] = await SuperHero.update(body, {
      where: { id: idHero },
      returning: true,
    });
    if (rowsCount !== 1) {
      return next(createError(400, 'Hero can`t update'));
    }
    res.status(200).send(updatedHero);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { idHero },
    } = req;
    const deletedHeroe = await SuperHero.destroy({
      where: { id: idHero },
      returning: true,
    });
    if (!deletedHeroe) {
      return next(createError(400, 'Hero can`t delete'));
    }
    res.send(deletedHeroe);
  } catch (err) {
    next(err);
  }
};

const { Image } = require('../models');
const createError = require('http-errors');

module.exports.addImgs = async (req, res, next) => {
  try {
    const {
      params: { idHero },
      files
    } = req;

    const images = files.map(file => ({ path: file.path, hero_id: idHero }));
    const newImages = await Image.bulkCreate(images, { returning: true });

    if (!newImages) {
      return next(createError(400, 'Can`t added imgs'));
    }
    res.status(201).send(newImages);
  } catch (err) {
    next(err);
  }
};

module.exports.getHeroImages = async (req, res, next) => {
  try {
    const {
      params: { idHero }
    } = req;

    const images = await Image.findAll({
      where: { hero_id: idHero }
    });
    if (!images) {
      return next(createError(400, 'Can`t get imgs'));
    }
    res.send(images);
  } catch (err) {
    next(err);
  }
};

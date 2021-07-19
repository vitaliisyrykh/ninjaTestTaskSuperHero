const { Router } = require('express');

const pagination = require('../../middlewares/pagination.mw');
const superHeroController = require('../../controllers/superHeroController');
const { checkHero } = require('../../middlewares/checkHero.mw');
const superPowerRouter = require('./superPowerRouter');
const imgsRouter = require('./imgHeroRouter');
const uploadImgs = require('../../middlewares/uploadImgs');

const superHeroRouter = Router();
superHeroRouter
  .route('/')
  .post(uploadImgs, superHeroController.createSuperHero)
  .get(pagination, superHeroController.getAllHeroes);

superHeroRouter
  .route('/:idHero')
  .get(checkHero, superHeroController.getHero)
  .patch(superHeroController.updateHero)
  .delete(superHeroController.deleteHero);

superHeroRouter.use('/:idHero/superpower', superPowerRouter);
superHeroRouter.use('/:idHero/imgs', imgsRouter);

module.exports = superHeroRouter;

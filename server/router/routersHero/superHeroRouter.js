const { Router } = require('express');
const superHeroController = require('../../controllers/superHeroController');
const pagination = require('../../middlewares/pagination.mw');


superHeroRouter = Router({
  mergeParams: true
});
superHeroRouter
  .route('/')
  .post(superHeroController.createSuperHero)
  .get(pagination, superHeroController.getAllHeroes);

superHeroRouter
  .route('/:idHero')
  .get(superHeroController.getHero)
  .patch(superHeroController.updateHero)
  .delete(superHeroController.deleteHero);

module.exports = superHeroRouter;

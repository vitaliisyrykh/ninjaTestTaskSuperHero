const { Router } = require('express');

const pagination = require('../../middlewares/pagination.mw');
const superHeroController = require('../../controllers/superHeroController');
const {checkHero} = require('../../middlewares/checkHero.mw')
const superPowerRouter = require('./superPowerRouter');


const superHeroRouter = Router({
  mergeParams: true
});
superHeroRouter
  .route('/')
  .post(superHeroController.createSuperHero)
  .get(pagination, superHeroController.getAllHeroes);

superHeroRouter
  .route('/:idHero')
  .get(checkHero,superHeroController.getHero)
  .patch(superHeroController.updateHero)
  .delete(superHeroController.deleteHero);

superHeroRouter.use('/:idHero/superpower', superPowerRouter)  

module.exports = superHeroRouter;

const { Router } = require('express');
const { checkHero } = require('../../middlewares/checkHero.mw');
const superPowerController = require('../../controllers/superPowerController');

const superPowerRouter = Router({
  mergeParams: true
});

superPowerRouter.post('/', checkHero, superPowerController.createPower);
superPowerRouter.get('/', checkHero, superPowerController.getSuperPower);

superPowerRouter
  .route('/:idPower')
  .get(checkHero, superPowerController.getPower)
  .patch(superPowerController.updatePower)
  .delete(superPowerController.deleteSuperPower);

module.exports = superPowerRouter;

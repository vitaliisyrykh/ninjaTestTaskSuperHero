const router = require('express').Router();
const superHeroRouter = require('./routerHero/superHeroRouter');

router.use('/superhero', superHeroRouter)

module.exports = router;

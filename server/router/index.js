const router = require('express').Router();
const superHeroRouter = require('./routersHero/superHeroRouter');

router.use('/superhero', superHeroRouter)

module.exports = router;

const {Router} = require('express');

const imgsController = require('../../controllers/imgsHeroController');
const uploadImgsMW =require('../../middlewares/uploadImgs');
const {checkHero} = require('../../middlewares/checkHero.mw')

const imgsRouter = Router({
  mergeParams: true
})

imgsRouter.post('/', uploadImgsMW, checkHero, imgsController.addImgs);
imgsRouter.get('/', checkHero, imgsController.getHeroImages);
imgsRouter.get('/:imgId', checkHero, imgsController.getImage);
imgsRouter.delete('/:imgId',checkHero, imgsController.deleteImage)

module.exports = imgsRouter;
const  express = require('express');
const router = express.Router();
const cate = require('../controllers/cateControllers')

//加载所有 公羊生产性能鉴定表
router.get('/ramProTest',cate.getRamProTest);

//加载所有 母羊配种信息
router.get('/breedEwesInfo',cate.getBreedEwesInfo)

//条件查找 公羊生产性能鉴定表
router.get('/ramProTest/find',cate.getRamProTestFind)

//条件查询 母羊配种信息
router.post('/breedEwesInfoFind',cate.getBreedEwesInfoFind)
module.exports = router;

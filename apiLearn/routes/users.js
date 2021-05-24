const express = require('express');
const router = express.Router();
const user = require('../controllers/userContorllers')


//注册用户
router.post('/register',user.register)
//用户登录
router.post('login',user.login)
//获取所有 养殖户信息表
router.get("/userInfo",user.getUserInfo)


module.exports = router;

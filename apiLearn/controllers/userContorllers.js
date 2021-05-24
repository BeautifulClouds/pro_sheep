const dbConfig = require('../util/dbconfig')



//注册养殖户
register = (req,res) => {

}

//用户登录
login = (req,res) => {

}

//加载所有 养殖户信息表
getUserInfo = (req,res) => {
    let sql = 'select * from `养殖户信息表`';
    let sqlArr = []
    let callBack = (err,data) => {
        if(err){
            console.log('连接出错了');
        }else{
            res.send({
                'list': data
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}

module.exports = {
    getUserInfo,
    register,
    login
}

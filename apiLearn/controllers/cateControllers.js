const dbConfig = require('../util/dbconfig')


//加载所有 公羊生产性能鉴定表
getRamProTest = (req,res) => {

    let sql = 'select * from `公羊生产性能测定表`';
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

//条件查找 公羊生产性能鉴定表
getRamProTestFind = (req,res) => {
    let {num,county,town,user} = req.query
    //输入参数错误
    if(!num || !county || !town || !user){
        return res.send({
            code: 1,
            msg: '参数错误'

        })

    }
    try{
        let sql = 'select `个体编号`,`` * from `公羊生产性能测定表` where cate_id=?'
        let sqlArr = [num,county,town,user]
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
    }catch (e) {
        console.log(e);
        return res.send({
            code: 4,
            msg: '服务器错误，请稍后再试'
        })
    }
}

//加载所有 母羊配种信息
getBreedEwesInfo = (req,res) => {
    let sql = 'select * from `母羊配种信息`';
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


//条件查询 母羊配种信息
getBreedEwesInfoFind = (req,res) => {
    console.log(req.body)
    let {eweEarNum,date} = req.body
    console.log(req.body)
    //检测参数是否有误
    if(!eweEarNum || !date){
        return res.send({
            code: 1,
            msg: '参数错误'
        })
    }
    let num = parseInt(eweEarNum)
    console.log(eweEarNum,typeof num)
    console.log(date,typeof date)
    try{
        let sql = `select '母羊耳号' from "母羊配种信息" where '母羊耳号'=${num} `
        let sqlArr = []
        let callBack = (err,data) => {
            if(err){
                console.log('连接出错了',err);
            }else{
                res.send({
                    'list': data
                })
            }
        }
        dbConfig.sqlConnect(sql,sqlArr,callBack)
    }catch (e) {
        console.log(e);
        return res.send({
            code: 4,
            msg: '服务器错误，请稍后再试'
        })
    }
}

// //获取指定分类的文章列表
// getBreedEwesInfo = (req,res) => {
//     let {id} = req.query;
//     console.log(id);
//     let sql = 'select * from post where cate_id=?'
//     let sqlArr = [id]
//     let callBack = (err,data) => {
//         if(err){
//             console.log('连接出错了');
//         }else{
//             res.send({
//                 'list': data
//             })
//         }
//     }
//     dbConfig.sqlConnect(sql,sqlArr,callBack)
// }


module.exports = {
    getRamProTest,
    getBreedEwesInfo,
    getRamProTestFind,
    getBreedEwesInfoFind
}

const mysql = require('mysql')
module.exports = {
    //数据库配置
    config:{
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '74107410',
        database: 'exapi'
    },
    //连接数据库，使用MySQL连接池的方式
    //连接池对象
    sqlConnect:function (sql,sqlArr,callBack) {
        let pool = mysql.createPool(this.config)
        pool.getConnection((err,conn) => {
            if(err){
                console.log('连接失败');
                return false
            }
            //事件驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放连接
            conn.release()
        })
    }

}

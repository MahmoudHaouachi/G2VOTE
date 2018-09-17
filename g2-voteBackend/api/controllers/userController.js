var db = require('../../dbconnection');



exports.login = function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  db.query('select * from user where username = ? AND password = ?',[username,password], function(err,result){
    if(err) throw err;

    return res.status(200).send({
      'status':'sucess',
      'result':result
    });
  });
}

exports.incrementPos = function(req, res, next){
  var id = req.body.id;
  db.query('update user set position = position + 1 where id = ?',[id], function(err,result){
    if (err) throw err ;
    return res.status(200).send({
      'status':'sucess',
      'result':result
    });
  });
}

exports.getUserById = function(req, res, next){
  var id = req.body.id;
  db.query('select* from user where id =?',[id],function(err,result){
    if(err) throw err;
    return res.status(200).send({
      'status':'success',
      'result':result
    });
  });
}

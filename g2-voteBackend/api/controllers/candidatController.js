var db = require('../../dbconnection');


//Get all candidats
exports.getAllCandidats = function( req, res, next){

  db.query('SELECT * from candidat', function(err,result){
if (err) throw err;

      return res.status(200).send({
        'status' : 'sucess',
        'result' : result
      });
    });

};
//Get candidat by post
exports.getCandidatsByPost = function (req, res, next) {
  var post =  req.body.post;
  //var post = "sec";
  db.query('SELECT * from candidat where post = ?' , [post],function(err,result){
    if(err) throw err ;
    return res.status(200).send({
      'status':'sucess',
      'result':result
    });
  });
};
//increment vote
exports.incerementVote = function (req, res, next){
  var id = req.body.id;
//  var id = 1;
  db.query('UPDATE candidat set vote = vote + 1 where id = ?', [id], function(err, result){

    if (err) throw err ;
    return res.status(200).send({
      'status':'sucess',
      'result':result
    });


  });
};

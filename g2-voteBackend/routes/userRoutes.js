var express = require('express');
var User = require('../api/controllers/userController');
var router = express.Router();



router.post('/login',function(req,res){
  User.login(req,res);
});

router.post('/position',function(req,res){
  User.incrementPos(req,res);
});

router.post('/',function(req,res){
  User.getUserById(req,res);
});



module.exports = router ;

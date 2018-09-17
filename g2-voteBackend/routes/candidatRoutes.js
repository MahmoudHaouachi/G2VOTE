var express = require('express');
var Candidat = require('../api/controllers/candidatController');
var router = express.Router();


router.get('/',function(req,res){

  Candidat.getAllCandidats(req,res);
});

router.post('/post',function(req,res){
  Candidat.getCandidatsByPost(req,res);
});

router.post('/vote',function(req,res){
  Candidat.incerementVote(req,res);
});

module.exports = router ;

var express = require('express');
var router = express.Router();
var axios = require('axios')

var prefixes = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2020/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2020/01/rdf-schema#>
    PREFIX noInferences: <http://www.ontotext.com/explicit>
    PREFIX skos: <http://www.w3.org/2020/02/skos/core#>
    PREFIX amd: <http://prc.di.uminho.pt/2020/amd#>
    `




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id', function(req, res, next) {
  
  res.render('repos', { id: req.params.id})
});

router.post('/:id', function(req, res) {
  var getLink = "http://localhost:7200/repositories/"+ req.params.id + "?query="

  
  var encoded = encodeURIComponent(prefixes + req.body.text)
  console.log(getLink+encoded)
  axios.get(getLink + encoded)
  .then( dados => { 
      console.log(JSON.stringify(dados.data))  
      res.render('repos', {id: req.params.id, result: JSON.stringify(dados.data) })})
  .catch( erro => res.render('error', {error: erro}))
  
});
module.exports = router;

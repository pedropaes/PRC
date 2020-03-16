var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:7200/repositories")
    .then( dados => {
      console.log(JSON.stringify(dados.data))
      var myData = []
      myData = dados.data.results.bindings.map( repos =>{
        return {
        id: repos.id.value,
        title: repos.title.value,
        url: repos.uri.value
        }
      })
      res.render('index', { title: 'Express', repos: myData})
    })
    .catch( erro => console.log(erro))
});
//console.log(JSON.stringify(dados.data)), 
module.exports = router;

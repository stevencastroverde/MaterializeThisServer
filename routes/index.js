var express = require('express');
var router = express.Router();
const queries = require('../db/queries');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello from the other side');
});

router.get('/materialize/buttons', (req, res) => {
    queries.getButtons()
      .then((data) => {
        res.json(data);
      })
})

router.get('/materialize/cards', (req,res) => {
  queries.getCards()
    .then(data => {
      res.json(data);
    })
})

router.get('/materialize/collections', (req,res) => {
  res.json(Collections);
})
router.get('/materialize/components', (req, res) =>{
  queries.getAllComponents()
    .then(data => {
      res.json(data);
    });
})

module.exports = router;

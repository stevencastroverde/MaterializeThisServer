var express = require('express');
var router = express.Router();
var Buttons = require('../uiComponents/buttons');
var Cards = require('../uiComponents/cards');
var Collections = require('../uiComponents/collections');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello from over here');
});

router.get('/materialize/buttons', (req, res) => {
    res.json(Buttons);
})

router.get('/materialize/cards', (req,res) => {
  res.json(Cards);
})

router.get('/materialize/collections', (req,res) => {
  res.json(Collections);
})

module.exports = router;

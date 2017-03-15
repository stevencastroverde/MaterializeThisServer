var express = require('express');
var router = express.Router();
var Buttons = require('../uiComponents/buttons');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello from over here');
});

router.get('/materialize', (req, res) => {
    res.json(Buttons);

})

module.exports = router;

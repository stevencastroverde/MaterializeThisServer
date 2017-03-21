const db = require('./dbconnection');

module.exports = {

  getButtons:function (){
    return db.get('buttonsCollection');

  }




};

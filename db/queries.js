const db = require('./dbconnection');

module.exports = {

  getButtons: function() {
    let buttons = db.get('buttons');
    return buttons.find({})
            .then(docs => {
              db.close();
              return docs;
            });
  },
  getFooter: function() {
    let footer = db.get('footer');
    return footer.find({})
            .then(docs => {
              db.close();
              return docs;
            });
  },
  getBadges: function(){
    let badges = db.get('badges');
    return badges.find({})
        .then(docs => {
          db.close();
          return docs;
        });
  },
  getCards: function (){
    let cards = db.get('cards');
    return cards.find({})
        .then(docs => {
          db.close();
          return docs;
        });

  },
  getCollections: function(){
    let collections = db.get('collections');
    return collections.find({})
        .then(docs => {
          db.close();
          return docs;
        });
  },
  getNav: function () {
    let navbars = db.get('navbars');
    return navbars.find({})
      .then(docs => {
        db.close();
        return docs;
      });
  },
  getAllComponents: function (){
    return  Promise.all([this.getButtons(), this.getFooter(), this.getBadges(), this.getCards(), this.getCollections(), this.getNav()])
    .then(docs => {
      let allComponents = [];
      for(var i = 0; i < docs.length; i++){
        for(var j = 0; j <docs[i].length; j++){
          allComponents.push(docs[i][j]);
        }
      }
      return allComponents;
    });
  }
};

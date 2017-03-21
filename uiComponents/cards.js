module.exports = {
  basic: {
    displayName: 'Basic Card',
    category: 'Cards',
    html: "<div class='row'><div class='col s12 m6'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>Card Title</span><p>I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.</p></div><div class='card-action'><a href='#'>This is a link</a><a href='#'>This is a link</a></div></div></div></div>"
  },
  imageCard:{
    displayName: 'Image Card',
    category: 'Cards',
    html:"<div class='row'><div class='col s12 m7'><div class='card'><div class='card-image'><img src='http://placehold.it/350x150'><span class='card-title'>Card Title</span></div><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.</p></div><div class='card-action'><a href='#'>This is a link</a></div></div></div></div>"
  },
  floatingButton:{
    displayName: 'FABs in Cards',
    category: 'Cards',
    html:"<div class='row'><div class='col s12 m6'><div class='card'><div class='card-image'><img src='http://placehold.it/350x150'><span class='card-title'>Card Title</span><a class='btn-floating halfway-fab waves-effect waves-light red'><i class='material-icons'>add</i></a></div><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p></div></div></div></div>"
  },
  horizontalCard:{
    displayName: 'Horizontal Card',
    category: 'Cards',
    html:"<div class='col s12 m7'><h2 class='header'>Horizontal Card</h2><div class='card horizontal'><div class='card-image'><img src='http://lorempixel.com/100/190/nature/6'></div><div class='card-stacked'><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information.</p></div><div class='card-action'><a href='#'>This is a link</a></div></div></div></div>"
  },
  cardReveal: {
    displayName: 'Card Reveal',
    category: 'Cards',
    html:"<div class='card'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='http://placehold.it/350x150'></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>Card Title<i class='material-icons right'>more_vert</i></span><p><a href='#'>This is a link</a></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Card Title<i class='material-icons right'>close</i></span><p>Here is some more information about this product that is only revealed once clicked on.</p></div></div>"
  },
  cardTabs:{
    displayName:'Tabs in Cards',
    category: 'Cards',
    html:"<div class='card'><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p></div><div class='card-tabs'><ul class='tabs tabs-fixed-width'><li class='tab'><a href='#test4'>Test 1</a></li><li class='tab'><a class='active' href='#test5'>Test 2</a></li><li class='tab'><a href='#test6'>Test 3</a></li></ul></div><div class='card-content grey lighten-4'><div id='test4'>Test 1</div><div id='test5'>Test 2</div><div id='test6'>Test 3</div></div></div>"
  },
  cardPanel:{
    displayName: 'Card Panel',
    category: 'Cards',
    html:"<div class='row'><div class='col s12 m5'><div class='card-panel teal'><span class='white-text'>I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span></div></div></div>"
  }
};

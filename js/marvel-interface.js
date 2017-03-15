var Marvel = require("./../js/marvel.js").marvel;
var marvelApi = require("marvel-api");
var marvel = marvelApi.createClient({
  publicKey: '8840f5d9676b5998d8bb0b4dd63ba1ea'
, privateKey: 'd1c920ff3e7fcff7cdbf84b6089053dfd9ce29bd'
});
var heroName;

$(document).ready(function(){
  $("#my-hero").submit(function(event){
    event.preventDefault();
    heroName = $('#name').val();

    marvel.characters.findByName(heroName)
      .then(function(res) {
        console.log('Found character ID', res.data[0].id);
        return marvel.characters.comics(res.data[0].id);
      })
      .then(function(res) {
        console.log(res.meta.count, res.meta.total);
        console.log(res.data);
      })
      .fail(console.error)
      .done();
  })
})

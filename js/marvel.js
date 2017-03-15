var marvelApi = require("marvel-api")
// var marvelClient = marvelApi.createClient({
//   publicKey: '8840f5d9676b5998d8bb0b4dd63ba1ea', privateKey: 'd1c920ff3e7fcff7cdbf84b6089053dfd9ce29bd'
// });
//
// var Marvel = function(name, comics) {
//   this.superHerName = name;
//   this.comics = comics
// }



var Marvel = function(name){
  this.superHeroName = name;
  this.api = marvelApi.createClient({
  publicKey: '8840f5d9676b5998d8bb0b4dd63ba1ea', privateKey: 'd1c920ff3e7fcff7cdbf84b6089053dfd9ce29bd'
  });
  this.id;
}

Marvel.prototype.getFirst20Issues = function(){
  this.api.characters.findByName('spider-man')
    .then(function(res) {
      console.log('Found character ID', res.data[0].id);
      return this.api.characters.find(res.data[0].id);
    })
    .then(function(res) {
      console.log(res.meta.count, res.meta.total);
    })
    .fail(console.error)
    .done();
}


exports.marvel = Marvel;

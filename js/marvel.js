var MarvelAPI = require("marvel-api")

var Marvel = function(name){
  this.superHeroName = name;
  this.api = MarvelAPI.createClient({
  publicKey: '8840f5d9676b5998d8bb0b4dd63ba1ea', privateKey: 'd1c920ff3e7fcff7cdbf84b6089053dfd9ce29bd'
  });
}

Marvel.prototype.getFirst20Issues = function(){
  this.api.characters.findByName(this.superHeroName)
    .then(function(res){
      console.log('Found character id', res.data[0].id);
      return this.api.characters.comics(res.data[0].id);
    })
    .then(function(res){
      console.log('found a bunch of comics', res.meta.count, res.meta.total);
      console.log(res.data);
    })
    .fail(console.error)
    .done();
}

exports.Marvel = Marvel;

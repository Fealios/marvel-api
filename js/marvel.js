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
  this.newmarvel = marvelApi.createClient({
  publicKey: '8840f5d9676b5998d8bb0b4dd63ba1ea', privateKey: 'd1c920ff3e7fcff7cdbf84b6089053dfd9ce29bd'
  });
  this.comics = [];
  this.covers = [];
  this.links = [];
}

Marvel.prototype.getFirst20Issues = function(){
  var current = this;
  current.newmarvel.characters.findByName(this.superHeroName)
    .then(function(res) {
      // console.log('Found character ID', res.data[0].id);
      return current.newmarvel.characters.comics(res.data[0].id);
    })
    .then(function(res) {
      // console.log(res.meta.count, res.meta.total);
      // console.log(res.data);
      current.comics = res.data;
      console.log(res.data);
      // return this.comics;
    })
    .then(function(res){
      current.getCover();
      current.getLinks();
      for(var i = 0; i < current.covers.length; i++) {
        $("#comic-list").append("<a class='carousel-item' href=" + current.links[i] + "><img src=" + current.covers[i] + "></a>");
      }
    })
    .fail(console.error)
    .done();
}

Marvel.prototype.getCover = function(){
  var coverArr = [];
  var current = this;
  for (i=0; i<current.comics.length; i++){
    var imgUrl = "";
    imgUrl += (this.comics[i].images[0].path + ".");
    imgUrl += this.comics[i].images[0].extension;
    coverArr.push(imgUrl);
    console.log(imgUrl);
  }
  this.covers = coverArr;
}

Marvel.prototype.getLinks = function(){
  var linkArr = [];
  var current = this;
  for (i=0; i<current.comics.length; i++){
    linkArr.push(current.comics[i].urls[0].url);
  }
  this.links = linkArr;
}


exports.marvel = Marvel;

var Marvel = require("./../js/marvel.js").marvel;
var heroName;

$(document).ready(function(){
  $("#my-hero").submit(function(event){
    event.preventDefault();
    heroName = $('#name').val();

    newHero = new Marvel(heroName);
    newHero.getFirst20Issues(heroName);
  })
})

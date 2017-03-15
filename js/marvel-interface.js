var Marvel = require("./../js/marvel.js").marvel;
var heroName;

$(document).ready(function(){
  $('.carousel').carousel();
  $("#my-hero").submit(function(event){
    event.preventDefault();
    $('.carousel').text("");
    heroName = $('#name').val();

    newHero = new Marvel(heroName);
    newHero.getFirst20Issues(heroName);

    // newHero.getCover();
  })
})

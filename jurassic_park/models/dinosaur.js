const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}
Dinosaur.prototype.getGuestsAttractedPerDay = function(){
  return this.guestsAttractedPerDay;
}

module.exports = Dinosaur;

const Park = function(){
  this.name = "Jurassic Park";
  this.ticketPrice = 10;
  this.dinosaurs = [];
  this.sameSpeciesArray = [];
  this.category = {
    carnivore: 0,
    plant: 0
  }
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaurs.pop(dinosaur);
};

Park.prototype.mostAttactiveDinosaur = function(){
  let attractiveDinosaur = this.dinosaurs.shift();
  for(let i=0; i< this.dinosaurs.length; i++){
    let currentDinosaur = this.dinosaurs[i];
    if(attractiveDinosaur.guestsAttractedPerDay <
      currentDinosaur.guestsAttractedPerDay){
      attractiveDinosaur = currentDinosaur;
    }
   }
  return attractiveDinosaur ;
};

Park.prototype.findSameSpeciesDinosaur = function(species){

  for (let dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      this.sameSpeciesArray.push(dinosaur);
    }
  }
  return this.sameSpeciesArray;
};

Park.prototype.removeSameSpeciesDinosaur = function(species){

  for (let dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      let index = this.dinosaurs.indexOf(dinosaur);
      this.dinosaurs.splice(index,1);
    }
  }
  return this.dinosaurs;
};


Park.prototype.totalVisitorsPerDay = function(){
  let total = 0;
  for (let dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.totalVisitorsPerYear = function(){
  let total = 0;
  total = this.totalVisitorsPerDay()*365;
  return total;
};


Park.prototype.totalRevenuePerYear = function(){
  let total = 0;
  total = this.totalVisitorsPerYear()*this.ticketPrice;
  return total;
};

Park.prototype.assignDinosaurObject = function(){

  for (let dinosaur of this.dinosaurs){
    if(dinosaur.diet === 'carnivore'){
      this.category.carnivore++;
    }
    if(dinosaur.diet === 'plant'){
      this.category.plant++;
    }
  }

};



module.exports = Park;

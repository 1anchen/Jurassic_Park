const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('pterodactylus', 'carnivore', 30);
    dinosaur3 = new Dinosaur('Brachiosaurus', 'plant', 100);
    dinosaur4 = new Dinosaur('Stegosaurus', 'plant', 80);

  });

  it('should have a name',function(){
    assert.strictEqual(park.name, "Jurassic Park");
  });

  it('should have a ticket price',function(){
    assert.strictEqual(park.ticketPrice,10);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs,[]);
  });

  it('should be able to add a dinosaur to its collection',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.deepStrictEqual(park.dinosaurs,[dinosaur1,dinosaur2]);
  });


  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    assert.deepStrictEqual(park.dinosaurs,[]);
  });


  it('should be able to find the dinosaur that attracts the most visitors',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.mostAttactiveDinosaur(),dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.findSameSpeciesDinosaur('t-rex'),[dinosaur1])
  });


  it('should be able to remove all dinosaurs of a particular species',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.removeSameSpeciesDinosaur('t-rex'),[dinosaur2,dinosaur3,dinosaur4])
  });

  it('should be able to Calculate the total number of visitors per day',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.totalVisitorsPerDay(),260);
  });


  it('should be able to Calculate the total number of visitors per year',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.totalVisitorsPerYear(),94900);
  });

  it('should be able to Calculate the total revenue from ticket sales for one year',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.totalRevenuePerYear(),949000);
  });

  it('should be able to Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.assignDinosaurObject();
    assert.deepStrictEqual(park.category,{carnivore: 2, plant: 2});
  });

});
//
//
//

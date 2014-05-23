'use strict';

angular.module('letsdrinkApp')
  .service('Myingredients', function Myingredients() {

    // Some kind of http get for retrieving ingredients from the db
    // through rails end point.

    // var ingredients = [
    //   {"name" : "Gin", "garnish": true},
    //   {"name" : "Vermouth", "garnish": true},
    //   {"name" : "Green Olives", "garnish": true},
    //   {"name" : "St. Germain", "garnish": true},
    //   {"name" : "Bourbon Whiskey", "garnish": true},
    //   {"name" : "Lemon Juice", "garnish": true},
    //   {"name" : "Simple Syrup", "garnish": true},
    //   {"name" : "White Tequila", "garnish": true},
    //   {"name" : "Lime Juice", "garnish": true},
    //   {"name" : "Cointreau", "garnish": true}
    // ];


    var ingredients = [

      {"name" : "Gin", "have": false},
      {"name" : "Vermouth", "have": false},
      {"name" : "Green Olives", "have": false},
      {"name" : "St. Germain", "have": false},
      {"name" : "Bourbon Whiskey", "have": false},
      {"name" : "Lemon Juice", "have": false},
      {"name" : "Simple Syrup", "have": false},
      {"name" : "White Tequila", "have": false},
      {"name" : "Lime Juice", "have": false},
      {"name" : "Cointreau", "have": false}

    ];

	return ingredients;
  });

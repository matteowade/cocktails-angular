'use strict';

angular.module('letsdrinkApp')
  .controller('MainCtrl', function ($scope, Drinks, Myingredients) {

    $scope.ingredients = Myingredients;
    $scope.drinks = Drinks;
    $scope.makeTitle = "You can't make any drinks :-(";

    $scope.$watch('ingredients', function() {
      $scope.canMakeThese = [];
       whatCanIMake();
    }, true);

    function whatCanIMake() {

	    for (var i = 0; i < $scope.drinks.length; i++) {
        var match = drinkMatch($scope.drinks[i].ingredients);
        if (match === true) {
            $scope.canMakeThese.push($scope.drinks[i]);
            $scope.makeTitle = "You can make these drinks:";
        }
	    }
      console.dir($scope.canMakeThese);
	  }

  	function drinkMatch(drinkIngredients) {
      var matchList = [];

      for (var i = 0; i < $scope.ingredients.length; i++) {
        if ($scope.ingredients[i].have === true) {
          matchList.push($scope.ingredients[i].name);
        }
      }

      for (var p = 0; p < drinkIngredients.length; p++) {
        if (matchList.indexOf(drinkIngredients[p].name) === -1) {
            return false;
        }
      }
      return true;
  	}
});

'use strict';

angular.module('letsdrinkApp')
  .service('Drinks', function Drinks() {

	var drinks = [
        {
            "name" : "Martini",
            "ingredients" : [
                {
                    "name":"Gin",
                    "measureType":"part",
                    "measureAmount":"11"
                },
                {
                    "name":"Vermouth",
                    "measureType":"part",
                    "measureAmount":"3"
                },
                {
                    "name":"Green Olives",
                    "measureType":"garnish",
                    "measureAmount":"2"
                }
            ],
            "recipe-text" : "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive. (On the rocks: Pour all ingredients over ice cubes in old-fashioned glass, garnish as above and serve.)",
            "container":"martini glass",
            "mixMethod":"shaken"
        },
        {
            "name" : "Gin Martini",
            "ingredients" : [
                {
                    "name":"Gin",
                    "measureType":"part",
                    "measureAmount":"11"
                },
                {
                    "name":"Green Olives",
                    "measureType":"garnish",
                    "measureAmount":"2"
                }
            ],
            "recipe-text" : "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive. (On the rocks: Pour all ingredients over ice cubes in old-fashioned glass, garnish as above and serve.)",
            "container":"martini glass",
            "mixMethod":"shaken"
        },
        {
            "name" : "Whiskey Sour",
            "ingredients" : [
                {
                    "name":"Bourbon Whiskey",
                    "measureType":"part",
                    "measureAmount":"3"
                },
                {
                    "name":"Lemon Juice",
                    "measureType":"part",
                    "measureAmount":"2"
                },
                {
                    "name":"Simple Syrup",
                    "measureType":"part",
                    "measureAmount":"1"
                }
            ],
            "recipe-text" : "Shake with ice. Strain into ice-filled old-fashioned glass to serve 'on the rocks.'",
            "container":"old fashioned glass",
            "mixMethod":"shaken"
        },
        {
            "name" : "Margarita",
            "ingredients" : [
                {
                    "name":"White Tequila",
                    "measureType":"part",
                    "measureAmount":"2"
                },
                {
                    "name":"Lime Juice",
                    "measureType":"part",
                    "measureAmount":"2"
                },
                {
                    "name":"Cointreau",
                    "measureType":"part",
                    "measureAmount":"1"
                }
            ],
            "recipe-text" : "Shake with ice. Strain into ice-filled old-fashioned glass to serve 'on the rocks.'",
            "container":"old fashioned glass",
            "mixMethod":"shaken"
        }
    ];
    return drinks;
});

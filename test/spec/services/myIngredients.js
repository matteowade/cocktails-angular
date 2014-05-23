'use strict';

describe('Service: myIngredients', function () {

  // load the service's module
  beforeEach(module('letsdrinkApp'));

  // instantiate service
  var myIngredients;
  beforeEach(inject(function (_myIngredients_) {
    myIngredients = _myIngredients_;
  }));

  it('should do something', function () {
    expect(!!myIngredients).toBe(false);
  });

});

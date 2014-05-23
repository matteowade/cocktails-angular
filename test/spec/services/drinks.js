'use strict';

describe('Service: drinks', function () {

  // load the service's module
  beforeEach(module('letsdrinkApp'));

  // instantiate service
  var drinks;
  beforeEach(inject(function (_drinks_) {
    drinks = _drinks_;
  }));

  it('should do something', function () {
    expect(!!drinks).length.toBe(2);
  });

});

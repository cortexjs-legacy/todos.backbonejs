'use strict';

var css_test = require('../index');

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
var assert = require('assert');

describe("description", function(){
  it("should has a method `my_method`", function(){
    assert.ok('my_method' in css_test);
  });
});
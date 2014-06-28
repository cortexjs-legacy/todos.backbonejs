'use strict';

var todos = require('../index');

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
var assert = require('assert');

describe("description", function(){
  it("should has a method `init`", function(){
    assert.ok('init' in todos);
  });
});

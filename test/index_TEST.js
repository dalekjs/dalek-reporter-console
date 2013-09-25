'use strict';

var expect = require('chai').expect;

describe('dalek-reporter-console', function() {

  it('should get default level', function(){
    var ConsoleResporter = require('../index')({config: {config: {}}, events: {on: function () {}, off: function () {}}});
    expect(ConsoleResporter.level).to.equal(1);
  });

});

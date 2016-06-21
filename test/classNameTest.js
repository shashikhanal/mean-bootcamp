var chai = require('chai');
var assert = chai.assert;
var func = require('../js/className.js');

describe('addClass', function(){
	it('should add class to element', function(){
		var element = { className: '' };

		func.addClass(element, 'test-class');

		assert.equal(element.className, 'test-class');
	});

	it('should not add a class which already exists', function(){
		var element = { className: 'exists' };

		func.addClass(element, 'exists');

		var numClasses = element.className.split(' ').length;
		assert.equal(numClasses, 1);
	});

	it('should append new class after existing one', function(){
		var element = { className: 'exists' };

		func.addClass(element, 'new-class');

		var classes = element.className.split(' ');
		assert.equal(classes[1], 'new-class');
	})
});
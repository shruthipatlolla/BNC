// This file tests our application code - open the associated HTML file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// Modify the code in your appplication to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing getBulls function with several sets of inputs', function (assert) {
    assert.equal(getBulls(23, 63, 2), 1, 'Tested with two digit number and got correct number of bulls');
    assert.equal(getBulls(234, 634, 3), 2, 'Tested with three digit number and got correct number of bulls');
    assert.equal(getBulls(2345, 6347, 4), 2, 'Tested with four digit number and got correct number of bulls');
    
    
});

QUnit.test('Testing getCows function with several sets of inputs', function (assert) {
    assert.equal(getCows(45, 54, 2), 2, 'Tested with two digit number and got correct number of cows.');
    assert.equal(getCows(456, 543, 3), 2, 'Tested with three digit number and got correct number of cows.');
    assert.equal(getCows(4567, 5743, 4), 3, 'Tested with four digit number and got correct number of cows.');

    
    
});

QUnit.test('Testing isValid function with several sets of inputs', function (assert) {
    assert.equal(isValid(12, 2), true, 'Tested with two digit number. Any argument with two digits will return true.');
    assert.equal(isValid(123, 24), false, 'Tested with three digit number. Any argument which is not a three digits will return false.');
    
    
});




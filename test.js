'use strict';

var test = require('tape');

var validator = require('./input_validation.js');
// var file = "input_validation.js";
//
// test('Validator exists', function (t) {
//   t.equal(file.exists(), true);
//   t.end();
// });


test("validator accepts valid email, a scale of 15 and positive feedback", function (t) {
  t.equal(validator("amazing super smart ", 15, "apple@mail.com"), true);
  t.end();
});


test("validator rejects unfilled email, a scale of 15 and positive feedback", function (t) {
  t.equal(validator("amazing super smart ", 15, ""), false);
  t.end();
});

test("validator rejects valid email, a scale of 9 and positive feedback", function (t) {
  t.equal(validator("amazing super smart ", 9, "apple@mail.com"), false);
  t.end();
});

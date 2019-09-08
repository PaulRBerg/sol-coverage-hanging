/* eslint-disable func-names */
/* global artifacts, contract */
const counterOne = require("./Counter.One");
const counterTwo = require("./Counter.Two");
const counterThree = require("./Counter.Three");
const counterFour = require("./Counter.Four");
const counterFive = require("./Counter.Five");
const counterSix = require("./Counter.Six");
const counterSeven = require("./Counter.Seven");
const counterOpt = require("./Counter.Opt");
const counterNine = require("./Counter.Nine");
const counterTen = require("./Counter.Ten");

const Counter = artifacts.require("./Counter");

contract("Counter", function() {
  beforeEach(async function() {
    this.counter = await Counter.new();
  });

  counterOne();
  counterTwo();
  counterThree();
  counterFour();
  counterFive();
  counterSix();
  counterSeven();
  counterOpt();
  counterNine();
  counterTen();
});

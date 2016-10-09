var curry = require('./curry');

function calculate(number1){
  return function (operation){
    switch (operation) {
      case 'add':
      case '+':
          return function (number2){
            return number1 + number2;
          };
        break;
      case 'subtract':
      case '-':
          return function (number2){
            return number1 - number2;
          };
        break;
      case 'multiply':
      case '*':
          return function (number2){
            return number1 * number2;
          };
        break;
      case 'divide':
      case '/':
          return function (number2){
            return number1 / number2;
          };
        break;
      case 'modulo':
      case '%':
          return function (number2){
            return number1 % number2;
          };
        break;
      case 'power of':
      case '^':
          return function (number2){
            return Math.pow(number1, number2);
          };
        break;
    }
  }; // eof function
} // eof calculate


function random (start) {
  return {
    to: function(end){
          return Math.floor( Math.random()*( end-start ) )+start;
        },//eof to
    toInclude: function(end){
                  return Math.floor( Math.random()*( end-start+1 ) )+start;
                } //eof to Include
  }; // eof return
} // eof random

function concat(expr1, expr2){
  return expr1 + expr2;
}

var prependGreeting = curry(concat, 'Hello ');


function add (number1, number2, number3) {
  return number1 + number2 + number3;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation){
    switch (operation) {
      case 'add':
      case '+':
        return function (op1, op2){
          return op1 + op2;
        };
        break;
      case 'subtract':
      case '-':
        return function (op1, op2){
          return op2 - op1;
        };
        break;
      case 'multiply':
      case '*':
        return function (op1, op2){
          return op1 * op2;
        };
        break;
      case 'divide':
      case '/':
        return function (op1, op2){
          return op2 / op1;
        };
        break;
      case 'modulo':
      case '%':
        return function (op1, op2){
          return op2 % op1;
        };
        break;
      case 'power of':
      case '^':
        return function (op1, op2){
          return Math.pow(op2, op1);
        };
        break;
    }
} // eof calculator

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};
'use strict';
//var diceExpression = document.getElementById('expresssionInput').value;

function diceRoller() {
  //this should take expressions like 3d6 etc.
  var diceExpression = document.getElementById('expresssionInput').value;
  var count = diceExpression.match(/^[^d]*/)[0] || 1;
  // console.log(count);
  var die = diceExpression.match(/d(.[^+\-*\/\s]*)/)[1];
  var operator = diceExpression.match(/[\+\-\/\*]/) ? diceExpression.match(/[\+\-\/\*]/)[0] : 0;
  var operand = diceExpression.match(/[\+\-\/\*](.*)/) ? diceExpression.match(/[\+\-\/\*](.*)/)[1] : 0;
  var total = 0;
  for (var i = 0; i < count; i++) {
    total += rollDice(die);
  }
  if (operator && operand) {
    if (operator === '+') {
      total += parseInt(operand);
    } else if(operator ===  '-') {
      total -= parseInt(operand);
    }else if(operator ===  '*') {
      total *= parseInt(operand);
    }else if(operator ===  '/') {
      total /= parseInt(operand);
    }
  }
  console.log(total);
  document.getElementById('diceValue').innerHTML = total;
};

function rollDice(sides) {
  return Math.floor(Math.random() * (sides) + 1);
};

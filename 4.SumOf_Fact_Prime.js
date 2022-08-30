// 2!+3!+5!

const prompt = require("prompt-sync")();

const from = prompt("Enter the starting range...");
const to = prompt("Enter the ending range...");

function prime(lowerNumber, higherNumber) {
  let primeNumber = [];

  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      primeNumber.push(i);
    }
  }

  return primeNumber;
}

function factorial(num) {
  let factnum = 1;
  for (let i = 1; i <= num; i++) {
    factnum *= i;
  }
  return factnum;
}

function main(_from, _to) {
  let primeNumbers = prime(_from, _to);
  let sum = 0;

  primeNumbers.forEach((num) => {
    sum += factorial(num);
  });

  return sum;
}

let sumOfFactOfPrime = main(from, to);

console.log(sumOfFactOfPrime);

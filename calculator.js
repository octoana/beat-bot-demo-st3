// create a calculator object with the following methods: add, subtract, multiply, divide, square, squareRoot, cube, cubeRoot, exponent, factorial, and isPrime

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  square: (a) => a * a,
  squareRoot: (a) => Math.sqrt(a),
  cube: (a) => a * a * a,
  cubeRoot: (a) => Math.cbrt(a),
  exponent: (a, b) => Math.pow(a, b),
  factorial: (a) => {
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result *= i;
    }
    return result;
  },
  isPrime: (a) => {
    if (a <= 1) return false;
    if (a <= 3) return true;
    if (a % 2 === 0 || a % 3 === 0) return false;
    for (let i = 5; i * i <= a; i += 6) {
      if (a % i === 0 || a % (i + 2) === 0) return false;
    }
    return true;
  },
};

module.exports = calculator;

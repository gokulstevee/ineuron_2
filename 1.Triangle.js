const prompt = require("prompt-sync")();

const a = prompt("Enter the length of A");
const b = prompt("Enter the length of B");
const c = prompt("Enter the length of C");

function triangle() {
  if (a == b && b == c) {
    console.log("The triangle is equilateral");
  }
  if ((a == b && a != c) || (a == c && b != a) || (b == c && b != a)) {
    console.log("The triangle is isosceles");
  }
  if (a != b && b != c && a != c) {
    console.log("The triangle is scalene");
  }
}

triangle(a, b, c);

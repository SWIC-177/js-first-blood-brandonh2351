function sumNumbers1(x, y) {
  return x + y;
}

const sumNumbers2 = (a, b) => {
  console.log(a + b);

  return a + b;
};

console.log(sumNumbers1(2, 3)); // Output: 5
console.log(sumNumbers2(4, 5)); // Output: 9

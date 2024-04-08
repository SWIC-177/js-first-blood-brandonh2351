function createIncrementFunction(scoreToAdd) {
  return function (increment) {
    return scoreToAdd + increment;
  };
}

const incrementByThree = createIncrementFunction(3);

console.log(incrementByThree(3));

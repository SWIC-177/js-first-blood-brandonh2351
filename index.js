function verifyAdulthood(name, age) {
  if (age >= 18) {
    return `Welcome ${name}!`;
  }
  return `You are not old enough to enter, ${name}.`;
}

const name = "Brandon";
const age = 22;

console.info(verifyAdulthood(name, age));

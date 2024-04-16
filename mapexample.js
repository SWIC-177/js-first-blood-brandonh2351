const numbers = [
  { single: 1, double: 10 },
  { single: 2, double: 20 },
  { single: 3, double: 30 },
];

const doubleNumbers = numbers.map((number) => ({
  single: number.single,
  double: number.double * 2,
}));

console.log(doubleNumbers);

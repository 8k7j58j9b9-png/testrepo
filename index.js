function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log("2 + 3 =", result);

// Fail the CI build if the math is wrong
if (result !== 5) {
  throw new Error(`Expected 5, but got ${result}`);
}

console.log("All checks passed!");

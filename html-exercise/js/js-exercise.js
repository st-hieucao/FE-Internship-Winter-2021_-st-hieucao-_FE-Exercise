//bai1
const getTotalNumberByEachCase = (a, b) => {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
};
console.log(getTotalNumberByEachCase(10, 5));

//bai2
const calculateDifferenceWith19ByEachCase = (a) => {
  if (a > 19) {
    return (19 - a) * 3;
  } else {
    return 19 - a;
  }
};
console.log(calculateDifferenceWith19ByEachCase(10));

// bai3 & 4
const findNumberDivisibleByRandomNumber = (number, randomNumber) => {
  let results = [];
  let characterNumber = number.split("");
  let indexSecretNumber = characterNumber.indexOf("*");

  for (i = 0; i <= 9; i++) {
    characterNumber[indexSecretNumber] = i;
    let newNumber = parseInt(characterNumber.join(""));
    if (newNumber % randomNumber === 0) {
      results.push(characterNumber.join(""));
    }
  }
  return results;
};
console.log(findNumberDivisibleByRandomNumber("1234567890*", 6));

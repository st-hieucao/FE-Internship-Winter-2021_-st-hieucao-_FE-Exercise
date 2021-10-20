//bai1
const sum = (a, b) => {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
};
console.log(sum(10, 5));

//bai2
const greater19 = (a) => {
  if (a > 19) {
    return (19 - a) * 3;
  } else if (a === 19) {
    return 0;
  } else {
    return 19 - a;
  }
};
console.log(greater19(10));

// bai3 & 4
const findNumbers = (number, divideNumber) => {
  let results = [];
  let characterNumber = number.split("");
  let indexSecretNumber = characterNumber.indexOf("*");

  for (i = 0; i <= 9; i++) {
    characterNumber[indexSecretNumber] = i;
    let newNumber = parseInt(characterNumber.join(""));
    if (newNumber % divideNumber === 0) {
      results.push(characterNumber.join(""));
    }
  }
  return results;
};
console.log(findNumbers("1234567890*", 6));

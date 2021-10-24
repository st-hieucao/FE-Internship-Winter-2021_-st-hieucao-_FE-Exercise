//bai1
function getTotalNumberByEachCase(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}
console.log(getTotalNumberByEachCase(10, 5));

//bai2
function calculateDifferenceWith19ByEachCase(a) {
  if (a > 19) {
    return (a - 19) * 3;
  } else {
    return 19 - a;
  }
}
console.log(calculateDifferenceWith19ByEachCase(10));

// bai3 & 4
function findNumberDivisibleByRandomNumber(number, randomNumber) {
  var results = [];
  var characterNumber = number.split('');
  var indexSecretNumber = characterNumber.indexOf('*');

  for (i = 0; i <= 9; i++) {
    characterNumber[indexSecretNumber] = i;
    var newNumber = parseInt(characterNumber.join(''));
    if (newNumber % randomNumber === 0) {
      results.push(characterNumber.join(''));
    }
  }
  return results;
};
console.log(findNumberDivisibleByRandomNumber('1234567890*', 6));


// ------------------- BAI1
var arrayNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function getOddTotalsInArray(arr) {
  var newArr = arr.filter(function (item) {
    item % 2 === 1;
  });
  return newArr.reduce(function (x, sum) {
    x + sum;
  }, 0);
}
console.log(getOddTotalsInArray(arrayNumbers));

// ------------------- BAI2
function cutString(string) {
  if (string.length > 15) {
    var firstTenCharacter = string.slice(0, 10);
    var dots = '...';
    return firstTenCharacter.concat(firstTenCharacter, dots);
  }
  return string;
}
console.log(cutString('caokhahieucaokhahieu'));

// ------------------- BAI3
function capitalizeFirstLetter(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalizeFirstLetter('caoKHAHIEU'));

// ------------------- BAI4
function getMinNumber(arr) {
  var len = arr.length;
  var result = arr[0];
  while (len--) {
    if (arr[len] < result) {
      result = arr[len];
    }
  }
  return result;
}
console.log(getMinNumber([1, 2, -9, 3, 4, 5, 7, -6]));

// ------------------- BAI5
function Student(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
}
var students = [
  new Student('John', 26, 'Cambridge'),
  new Student('Mark', 30, 'Oxford'),
  new Student('Bill', 28, 'Havard'),
];

// ------------------- BAI5.1
Student.prototype.coding = function () {
  if (this.age >= 28) {
    console.log('coding master');
  } else {
    console.log('learning code');
  }
};
students[0].coding();

// ------------------- BAI6
function findDuplicateNumberOf2Array(arr1, arr2) {
  return arr1.filter(function (item) {
    return arr2.indexOf(item) !== -1;
  });
}
console.log(findDuplicateNumberOf2Array([1, 2, 3, 4, 5], [1, 2, 3]));

// ------------------- BAI7
function getTotalDigit(number) {
  var numberCharacter = number.toString().split('');
  return numberCharacter.reduce(function (item, sum) {
    return parseInt(item) + parseInt(sum);
  }, 0);
}
console.log(getTotalDigit(1234));
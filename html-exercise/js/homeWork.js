var mang = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const oddTotals = (arr) => {
  let newArr = arr.filter((item) => item % 2 === 1);
  return newArr.reduce((x, sum) => x + sum, 0);
};
console.log(oddTotals(mang));

const cutString = (string) => {
  if (string.length > 15) {
    let firstTenCharacter = string.slice(0, 10);
    return `${string}${firstTenCharacter}`;
  }
  return string;
};
console.log(cutString("caokhahieucaokhahieu"));

const capitalizeFirstLetter = (string) => {
  let firstCharacter = string.slice(0, 1);
  let restCharacter = string.slice(1, string.length);
  return `${firstCharacter.toUpperCase()}${restCharacter.toLowerCase()}`;
};
console.log(capitalizeFirstLetter("caoKHAHIEU"));

const getMinNumber = (arr) => {
  return Math.min(...arr);
};
console.log(getMinNumber([1, 2, 3, 4, 5, 7]));

function Student(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
}
Student.prototype.coding = function (age) {
  if (age >= 28) {
    console.log("coding master");
  } else {
    console.log("learning code");
  }
};
const student1 = new Student("demo", 45, "dhsp");
console.log(student1.coding(student1.age));

const findRepeatNumber = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
};
console.log(findRepeatNumber([1, 1, 2, 2, 3, 3, 4, 4, 5]));

const sumCharacterNumber = (number) => {
  let numberCharacter = number.toString().split("");
  console.log(numberCharacter);
  return numberCharacter.reduce(
    (item, sum) => parseInt(item) + parseInt(sum),
    0
  );
};
console.log(sumCharacterNumber(1234));

// find duplicates in arr
const arrayOfNums = [44, 1, 22, 1, 22, 44, 2, 33];

const findDuplicate = (arr) => {
  let arrLength = arr.length;
  const duplicate = [];

  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] === arr[j]) {
        duplicate.push(arr[j]);
      }
    }
  }

  return duplicate.length;
};

console.log(findDuplicate(arrayOfNums));

console.log("========countOccurences========");

// find occurrences in an array
const arrayOfNums1 = [
  22, 2, 11, 44, 88, 22, 11, 88, 84, 24, 22, 88, 2, 22, 88, 22, 22,
];

const countOccurences = (arr, arrVal) => {
  return arr.reduce((accumulator, currVal) => {
    if (arrVal === currVal) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
};

console.log(countOccurences(arrayOfNums1, 22));

console.log("========removeOccurences========");

// remove duplicates in an array
const arrayOfNums2 = [
  22, 2, 11, 44, 88, 22, 11, 88, 84, 24, 22, 88, 2, 22, 88, 22, 22,
];

const removeOccurences = (arr, delElem) => {
  const uniqueVals = [];

  return arr.forEach((char) => {
    if (!uniqueVals.includes(char)) {
      uniqueVals.push(delElem);
    }
  });
};

console.log(removeOccurences(arrayOfNums2, 22));

console.log("========capitalize first letter========");

const capitalizeFirstLetter = (str) => {
  const strArr = str.split(" ");
  const capitalised = strArr.forEach((elem) =>
    console.log(elem.charAt(0).toUpperCase() + elem.slice(1))
  );

  return capitalised;
};

console.log(capitalizeFirstLetter("this is hello world"));

console.log("========capitalise lower cases & vice versa========");

const findChar = (char = "") => {
  if (char.toLowerCase() === char) {
    return char.toUpperCase();
  } else if (char.toUpperCase() === char) {
    return char.toLowerCase();
  }
};

const invertCasing = (str = "") => {
  let invertedCasing = "";

  for (let i = 0; i < str.length; i++) {
    invertedCasing += findChar(str[i]);
  }

  return invertedCasing;
};

console.log(invertCasing("IMprove COdinG SkiLLs"));

console.log("========concat string n no. of times========");

const concatNTimes = (strArg, num) => {
  let str = "";

  for (let i = 0; i < num; i++) {
    str += " " + strArg;
  }

  return str;
};

console.log(concatNTimes("Hello World !!", 10));

console.log("========chop string with n times chunks========");

const chopStrNTimes = (str, num) => {
  const strArr = str.split("");
  const newArr = [];

  for (let i = 0; i < strArr.length; i <= num) {
    newArr.push(strArr.slice(i, (i += num)));
  }

  return newArr;
};

console.log(chopStrNTimes("helloworld", 2));

console.log("========reverse a string========");

const reverseStr = (str) => {
  let strArr = str.split("");
  let reversedStr = "";

  for (let i = strArr.length; i >= 0; i--) {
    reversedStr += strArr[i];
  }

  return reversedStr;
};

console.log(reverseStr("hello"));

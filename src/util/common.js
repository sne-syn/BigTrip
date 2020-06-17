import {Millisecond} from "./const.js";

// generate randome integer
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

// generate random non-integer
const getRandomNumber = (min, max) => {
  return min + (Math.random() * (max - min));
};

// get 1 random item from arrayOfItems
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

// get several random items
const getSeveralRandomItems = (array, count) => {
  let set = new Set();
  for (let i = 0; i < count; i++) {
    set.add(getRandomArrayItem(array));
  }
  return [...set];
};

// capitalize first char only
const capitalizeChar = (str) => {
  if (typeof str !== `string`) {
    return ``;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// capitalize Every First Char
const capitalizeEveryFirstChar = (str) => {
  return str
    .toLowerCase()
    .split(` `)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(` `);
};

// copy array and convert it to string
const convertArrayToString = (arr) => {
  return [...arr].join(`, `);
};


const generateTripStartDate = () => {
  const diffDays = getRandomIntegerNumber(1, 5);
  const diffHours = getRandomIntegerNumber(0, 20);
  const diffMinutes = getRandomIntegerNumber(0, 59);
  const diffTime = diffDays * Millisecond.IN_DAY + diffHours * Millisecond.IN_HOUR + diffMinutes * Millisecond.IN_MINUTE;
  return new Date(Date.now() - diffTime);
};

const generateTripEndDate = (tripStart) => {
  const diffHours = getRandomIntegerNumber(0, 20);
  const diffMinutes = getRandomIntegerNumber(0, 59);
  const diffTime = diffHours * Millisecond.IN_HOUR + diffMinutes * Millisecond.IN_MINUTE;

  return new Date(tripStart.getTime() + diffTime);
};

export {
  getRandomIntegerNumber,
  getRandomArrayItem,
  getRandomNumber,
  capitalizeChar,
  capitalizeEveryFirstChar,
  getSeveralRandomItems,
  convertArrayToString,
  generateTripStartDate,
  generateTripEndDate
};

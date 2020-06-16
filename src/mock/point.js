import {
  getRandomIntegerNumber,
  getRandomArrayItem,
  getRandomNumber,
  capitalizeChar,
  capitalizeEveryFirstChar,
  getSeveralRandomItems,
  convertArrayToStrin
} from "./../util/common.js";
import {
  generateOffersList
} from "./offer.js";
import {
  destinationInfo
} from "./destination.js";

const typeMap = new Map([
  [`taxi`, {
    preposition: `to`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`bus`, {
    preposition: `to`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`train`, {
    preposition: `to`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`ship`, {
    preposition: `to`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`transport`, {
    preposition: `to`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`drive`, {
    preposition: `to`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`flight`, {
    preposition: `to`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`check-in`, {
    preposition: `in`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`sightseeing`, {
    preposition: `in`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }],
  [`restaurant`, {
    preposition: `in`,
    offers: [`Order Uber`, `Rent a car`, `Choose the radio station`]
  }]
]);

const types = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

const dateStart = [`2019-07-10T22:55:56.845Z`, `2019-07-10T20:34:56.845Z`, `2019-07-10T12:25:56.845Z`, `2019-07-10T13:20:23.845Z`, `2019-07-10T08:34:56.845Z`];

const dateEnd = [`2019-07-10T22:56:56.845Z`, `2019-07-10T20:44:56.845Z`, `2019-07-10T12:35:56.845Z`, `2019-07-10T15:23:45.845Z`, `2019-07-10T10:34:34.845Z`];

export const generatePoints = () => {
  return {
    destination: destinationInfo,
    type: getRandomArrayItem(types),
    dateFrom: getRandomArrayItem(dateStart),
    dateTo: getRandomArrayItem(dateEnd),
    price: getRandomIntegerNumber(5, 190),
    offers: generateOffersList(getRandomIntegerNumber(0, 5)),
    isFavorite: Math.random() > 0.5
  };
};

export const generatePoint = (count) => {
  return new Array(count)
    .fill(``)
    .map(generatePoints());
};

import {
  getRandomIntegerNumber,
  getRandomArrayItem,
} from "./../util/common.js";

const PriceRange = {
  MIN: 10,
  MAX: 150
};

const offers = [`Choose the radio station`, `Upgrade to a business class`, `Choose seats`, `Add luggage`, `Switch to comfort class`, `Add meal`, `Travel by train`, `Order Uber`, `Rent a car`, `Add breakfast`, `Book tickets`, `Lunch in city`];

 const generateOffer = () => {
  return {
    title: getRandomArrayItem(offers),
    price: getRandomIntegerNumber(PriceRange.MIN, PriceRange.MAX)
  };
};

export const generateOffersList = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateOffer);
};

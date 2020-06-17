import {
  getRandomIntegerNumber,
  getRandomArrayItem,
  generateTripStartDate,
  generateTripEndDate
} from "./../util/common.js";
import {
  generateOffersList
} from "./offer.js";
import {
  destinationInfo
} from "./destination.js";

const OffersCount = {
  MIN: 0,
  MAX: 5
};

const TripPriceRange = {
  MIN: 10,
  MAX: 300
};

const getRandomBoolean = () => {
  return  Math.random() > 0.5;
};

const types = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

const generateTripPoint = () => {
  const id = String(`_` + Math.random().toString(36).substr(2, 9));
  const type = getRandomArrayItem(types);
  const dateFrom = generateTripStartDate();
  const offersCount = getRandomIntegerNumber(OffersCount.MIN, OffersCount.MAX);
  const tripPrice = getRandomIntegerNumber(TripPriceRange.MIN, TripPriceRange.MAX);

  return {
    id,
    destination: destinationInfo,
    type,
    dateFrom,
    dateTo: generateTripEndDate(dateFrom),
    price: tripPrice,
    offers: generateOffersList(offersCount),
    isFavorite: getRandomBoolean()
  };
};

export const generateTripPoints = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTripPoint);
};

import {
  capitalizeChar
} from "./../util/common.js";

const MAX_OFFERS = 3;
const createOfferTemplate = (offer) => {
  const offersTitle = offer.title;
  const offersPrice = offer.price;

  return `<li class="event__offer">
  <span class="event__offer-title">${offersTitle}</span>
  &plus;
  &euro;&nbsp;<span class="event__offer-price">${offersPrice}</span>
 </li>`;
};

const createOffersList = (offers) => {
  let output = ``;
  for (let i = 0; i < offers.length; i++) {
    if (i > 2) {
      break;
    } else {
      output += createOfferTemplate(offers[i]);
    }
  }

  return output;
};

export const createPoint = (point) => {
  const {
    type,
    dateFrom,
    dateTo,
    price,
    offers,
    destination
  } = point;

  const destinationName = destination.name;
  const dateStart = dateFrom.toISOString().slice(0, 16);
  const dateEnd = dateTo.toISOString().slice(0, 16);
  return `<li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${capitalizeChar(type)} to ${destinationName}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateStart}">${dateStart}</time>
        &mdash;
        <time class="event__end-time" datetime="${dateEnd}">${dateEnd}</time>
      </p>
      <p class="event__duration">${dateStart} - ${dateEnd}</p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${(offers.length > 0) ? createOffersList(offers) : ``}
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

import {
  createPoint
} from './components/point-template';
import {
  createPointsListTemplate
} from './components/points-list-template';
import {
  createDayTemplate
} from './components/day-template.js';
import {
  createTripDaysContainerTemplate
} from './components/days-container-template.js';
import {
  createEventEditTemplate
} from './components/edit-event-template.js';
import {
  createTripEventsListTemplate
} from './components/events-list-template.js';
import {
  createFilterTemplate
} from './components/filter-template.js';
import {
  createFirstNewEvent
} from './components/first-event-template.js';
import {
  createMenuTemplate
} from './components/menu-template.js';
import {
  createNewEventTemplate
} from './components/new-event-template.js';
import {
  createSortTemplate
} from './components/sort-template.js';
import {
  createMainRouteInfoTemplate
} from './components/trip-main-template.js';
import {
  createStatsTemplate
} from './components/stats-template';
import {
  generateTripPoints
} from './mock/point';

import {generateFilters} from "./mock/filter.js";

const filters = generateFilters();
const tripPoints = generateTripPoints(20);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const tripElement = tripControlsElement.querySelector(`h2`);
const tripSection = document.querySelector(`.trip-events`);

render(tripMainElement, createMainRouteInfoTemplate(), `afterbegin`);
render(tripElement, createMenuTemplate(), `afterend`);
render(tripControlsElement, createFilterTemplate(filters), `beforeend`);
render(tripSection, createSortTemplate(), `beforeend`);
render(tripSection, createTripDaysContainerTemplate(), `beforeend`);

const tripDaysElement = document.querySelector(`.trip-days`);
const tripMainSortElement = document.querySelector(`.trip-sort`);
render(tripDaysElement, createDayTemplate(), `beforeend`);

const dayElement = document.querySelector(`.day`);
render(dayElement, createTripEventsListTemplate(), `beforeend`);
render(dayElement, createPointsListTemplate(), `beforeend`);
//===================

const eventListElement = document.querySelector(`.trip-events__list`);
for (let i = 0; i < 5; i++) {
  render(eventListElement, createPoint(tripPoints[i]), `beforeend`);
}

render(tripMainSortElement, createEventEditTemplate(), `afterend`);
//render(tripSection, createFirstNewEvent(), `beforeend`);
//render(tripSection, createNewEventTemplate(), `afterbegin`);
//render(tripSection, createStatsTemplate(), `beforeend`);

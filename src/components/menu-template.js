import {capitalizeChar} from "./../util/common.js";
import {menuTabs} from "./../util/const.js";


const createMenuItemTemplate = (menuTab, isActive) => {
  const activeTab = isActive ? `trip-tabs__btn--active` : ``;
  return `<a class="trip-tabs__btn ${activeTab}" href="#">${capitalizeChar(menuTab)}</a>`;
};

export const createMenuTemplate = () => {
  const menuMarkups = menuTabs.map((it, i) => createMenuItemTemplate(it, i === 0)).join(`\n`);
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${menuMarkups}
  </nav>`;
};

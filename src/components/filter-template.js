const createFilterMarkup = (name, isChecked) => {
  const checkedState = isChecked ? `checked` : ``;

  return `<div class="trip-filters__filter">
  <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${checkedState}>
  <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
</div>`;
};

export const createFilterTemplate = (filters) => {
  const isChecked = `true`;
  const filterMarkups = filters.map((it) => createFilterMarkup(it.name, true)).join(`\n`) ;
  createFilterMarkup(name, isChecked);
  return `<form class="trip-filters" action="#" method="get">
  ${filterMarkups}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
};

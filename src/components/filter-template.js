const createFilterMarkup = (filter, isChecked) => {
  const {name} = filter;
  const checkedState = isChecked ? `checked` : ``;

  return `<div class="trip-filters__filter">
  <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${checkedState}>
  <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
</div>`;
};

export const createFilterTemplate = (filters) => {
  const filterMarkups = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return `<form class="trip-filters" action="#" method="get">
  ${filterMarkups}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
};

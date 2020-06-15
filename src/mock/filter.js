const filterNames = [`everything`, `future`, `past`];

export const generateFilters = () => {
  return filterNames.map((name) => {
    return {
      name,
    };
  });
};

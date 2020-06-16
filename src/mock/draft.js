const placeTypes = new Set([`check-in`, `sightseeing`, `restaurant`]);

const setUpPlaceholderPreposition = (type) => {
  if (placeTypes.has(type)) {
    return `in`;
  } else {
    return `to`;
  }
};

const dateStart = [`2019-07-10T22:55:56.845Z`, `2019-07-10T20:34:56.845Z`, `2019-07-10T12:25:56.845Z`, `2019-07-10T13:20:23.845Z`, `2019-07-10T08:34:56.845Z`];

const dateEnd = [`2019-07-10T22:56:56.845Z`, `2019-07-10T20:44:56.845Z`, `2019-07-10T12:35:56.845Z`, `2019-07-10T15:23:45.845Z`, `2019-07-10T10:34:34.845Z`];


// const offers = new Map([
//   [`taxi`, ],
//   [`bus`],
//   [`train`],
//   [`ship`],
//   [`transport`],
//   [`drive`],
//   [`flight`],
//   [`check-in`, ],
//   [`sightseeing`],
//   [`restaurant`]
// ]);

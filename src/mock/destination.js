import {
  getRandomIntegerNumber,
  getRandomArrayItem
} from "./../util/common.js";

const PictureCount = {
  MIN: 0,
  MAX: 5
};

const cities = [`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`, `London`, `Liverpool`, `Manchester`, `Glasgow`, `Edinburgh`, `Cardiff`];

const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`, `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];

const pictureDescriptions = [`Parliament building`, `Someones house`, `The main settlement in the district is Canterbury`, `Cambridge is a university city and the county town`, `Geneva is a city in Switzerland`, `Saint Petersburg is famous by its white nights`];

const getDestinationPictures = (count) => {
  const pictureCount = getRandomIntegerNumber(count.MIN, count.MAX);
  return new Array(pictureCount)
    .fill(``)
    .map(() => {
      return {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: getRandomArrayItem(pictureDescriptions)
      };
    });
};

export const generateDestinationInfo = () => {
  return {
    name: getRandomArrayItem(cities),
    description: descriptions.slice(0, getRandomIntegerNumber(1, descriptions.length)).join(` `),
    pictures: getDestinationPictures(PictureCount)
  };
};

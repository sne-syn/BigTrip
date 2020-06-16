import {
  getRandomIntegerNumber,
  getRandomArrayItem,
  getRandomNumber,
  capitalizeChar,
  capitalizeEveryFirstChar,
  getSeveralRandomItems,
  convertArrayToString
} from "./../util/common.js";

const cities = [`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`];

const descriptions = [`Chamonix, is a beautiful city, a true asian pearl, with crowded streets.`, `Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.`, `Saint Petersburg is famous by its white nights, which are in the peak during May, June and practically whole July. It’s the time when the day is very long and the sun shines till the midnight and then rises at 3-4 at night, so the nights are not dark.`, `London is the capital and largest city of England and the United Kingdom, and is the largest urban area in Greater London. The River Thames travels through the city.`, `The City of Canterbury is a local government district with city status in Kent, England. The main settlement in the district is Canterbury.`, `Cambridge is a university city and the county town of Cambridgeshire, England, on the River Cam approximately 50 miles (80 km) north of London. At the United Kingdom Census 2011, its population was 123,867 including 24,506 students.[1][3] Cambridge became an important trading centre during the Roman and Viking ages, and there is archaeological evidence of settlement in the area as early as the Bronze Age.`, `Salisbury is a cathedral city in Wiltshire, England, with a population of 40,302,[1] at the confluence of the rivers Avon, Nadder and Bourne. The city is approximately 20 miles (32 km) from Southampton and 30 miles (48 km) from Bath.`];
const pictureDescriptions = [`Parliament building`, `Someones house`, `Call me again later`, `See you soon, bro`];

export const destinationInfo = {
  description: getRandomArrayItem(descriptions),
  name: getRandomArrayItem(cities),
  pictures: [{
    "src": "http://picsum.photos/300/200?r=0.0762563005163317",
    "description": getRandomArrayItem(pictureDescriptions)
  }]
};

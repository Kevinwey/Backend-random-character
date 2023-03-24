import Chance from "chance";

const chance = new Chance();

function getRandomCharacter() {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };

  return character;
}

export default function handler(request, response) {
  response.status(200).json(getRandomCharacter());
}

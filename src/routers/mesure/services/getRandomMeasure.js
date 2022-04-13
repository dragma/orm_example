import { generateRandomFloat, generateRandomInt } from '../../../utils/randomNumber';

const getRandomMeasure = (rq, res) => {
  const temperature = generateRandomFloat(5, 9, 3);
  const pression = generateRandomInt(98000, 105000);
  const altitude = generateRandomInt(20000, 35000);
  const humidite = generateRandomFloat(0, 11, 2);
  const latitude = generateRandomFloat(-90, 90, 6);
  const longitude = generateRandomFloat(-180, 180, 6);

  return res.send({
    temperature,
    pression,
    altitude,
    humidite,
    position: {
      latitude,
      longitude,
    },
  });
};

export default getRandomMeasure;

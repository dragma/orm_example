import { nanoid } from 'nanoid';

import prisma from '../clients/prisma';
import { generateRandomInt } from '../utils/randomNumber';

const NB_POSTES = 100;
const NB_BALLONS = 100000000;
const NB_BALLONS_PAR_CHUNK = 100000;
const NB_CHUNK = NB_BALLONS / NB_BALLONS_PAR_CHUNK;

// eslint-disable-next-line prefer-spread
const createArray = (size) => Array.apply(null, Array(size));

const insertBallons = (size) => prisma.ballon.createMany(
  {
    data: createArray(size).map(() => ({
      name: nanoid(),
      posteCommandeId: Number(generateRandomInt(1, 100)),
    })),
  },
);

const insertPosteCommande = () => prisma.posteCommande.createMany(
  {
    data: createArray(NB_POSTES)
      .map(() => ({ name: nanoid() })),
  },
);

const main = async () => {
  await insertPosteCommande();
  console.log(NB_POSTES, 'postes de commandes insérés');
  for (let i = 0; i < NB_CHUNK; i += 1) {
    await insertBallons(NB_BALLONS_PAR_CHUNK);
    console.log(NB_BALLONS_PAR_CHUNK * (i + 1), '/', NB_BALLONS, 'ballons insérés');
  }
};

main();

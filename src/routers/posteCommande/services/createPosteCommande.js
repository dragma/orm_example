import prisma from '../../../clients/prisma';

const createPosteCommande = async (req, res) => {
  const { name } = req.body;

  const posteCommande = await prisma.posteCommande.create({
    data: {
      name,
    },
  });

  return res.send({ payload: posteCommande });
};

export default createPosteCommande;

import prisma from '../../../clients/prisma';

const getPosteCommande = async (req, res) => {
  const posteCommande = await prisma.posteCommande.findUnique({
    where: { id: Number(req.params.id) },
  });
  return res.send({ payload: posteCommande });
};

export default getPosteCommande;

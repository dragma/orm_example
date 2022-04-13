import prisma from '../../../clients/prisma';

const getPosteCommandeByBallon = async (req, res) => {
  const { id } = req.params;
  // const posteCommande = await prisma.posteCommande.findFirst({
  //   where: {
  //     Ballons: {
  //       some: {
  //         id: {
  //           in: [Number(id)],
  //         },
  //       },
  //     },
  //   },
  // });
  const { PosteCommande: posteCommande } = await prisma.ballon.findUnique({
    where: {
      id: Number(id),
    },
    select: { PosteCommande: true },
  });
  res.send(posteCommande);
};

export default getPosteCommandeByBallon;

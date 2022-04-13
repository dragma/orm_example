import prisma from '../../../clients/prisma';

const linkPosteCommande = async (req, res) => {
  const { posteCommandeId } = req.body;
  const { id } = req.params;

  const ballon = await prisma.ballon.update({
    where: { id: Number(id) },
    data: {
      PosteCommande: {
        connect: {
          id: posteCommandeId,
        },
      },
    },
  });

  res.send(ballon);
};

export default linkPosteCommande;

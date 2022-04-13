import prisma from '../../../clients/prisma';

const createBallon = async (req, res) => {
  const { name } = req.body;

  const ballon = await prisma.ballon.create({
    data: { name },
    select: { id: true, name: true },
  });

  res.send({ payload: ballon });
};

export default createBallon;

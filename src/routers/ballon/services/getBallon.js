import prisma from '../../../clients/prisma';

import fieldsToSelect from '../../../utils/fieldsToSelect';

const getBallon = async (req, res) => {
  const fields = req.query?.fields?.split(',');
  const select = fieldsToSelect(fields);

  const ballon = await prisma.ballon.findUnique({
    where: { id: Number(req.params.id) },
    select,
  });
  return res.send({ payload: ballon });
};

export default getBallon;

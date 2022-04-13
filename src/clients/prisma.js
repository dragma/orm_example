import { PrismaClient } from '@prisma/client';
import { format } from 'sql-formatter';

const prisma = new PrismaClient({
  // log: ['query'],
});

prisma.$on('query', (e) => {
  // console.log('QUERY :');
  // console.log(format(e.query));
  // console.log('PARAMS :');
  // console.log(e.params);
  console.log(`DURATION: ${e.duration}ms`);
});

export default prisma;

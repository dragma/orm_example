import { Router } from 'express';

import getRandomMeasure from './services/getRandomMeasure';

const router = Router();

router.get('/get', getRandomMeasure);

export default router;

import { Router } from 'express';

import createPosteCommande from './services/createPosteCommande';
import getPosteCommande from './services/getPosteCommande';

const router = Router();

router.get('/:id', getPosteCommande);
router.post('/create', createPosteCommande);

export default router;

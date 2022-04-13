import { Router } from 'express';

import createBallon from './services/createBallon';
import getBallon from './services/getBallon';
import getPosteCommandeByBallon from './services/getPosteCommandeByBallon';
import linkPosteCommande from './services/linkPosteCommande';

const router = Router();

router.get('/:id/posteCommande', getPosteCommandeByBallon);
router.get('/:id', getBallon);
router.post('/create', createBallon);
router.put('/:id/posteCommande', linkPosteCommande);

export default router;

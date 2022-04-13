import express from 'express';

import mesureRouter from './routers/mesure/router';
import ballonRouter from './routers/ballon/router';
import posteCommandeRouter from './routers/posteCommande/router';

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use('/mesure', mesureRouter);
App.use('/ballon', ballonRouter);
App.use('/posteCommande', posteCommandeRouter);

App.listen(3000, () => console.log('Server listening on port 3000'));

import { Router } from 'express';
import { cardController } from '../controllers/cardController.js';
import { catchErrors as ce } from '../middlewares/catchErrors.js';

export const cardRouter = Router();

cardRouter.get('/cards', ce(cardController.index));
cardRouter.get('/cards/:id(\\d+)', ce(cardController.show));

cardRouter.post('/cards', ce(cardController.store));

cardRouter.patch('/cards/:id(\\d+)', ce(cardController.update));

cardRouter.delete('/cards/:id(\\d+)', ce(cardController.destroy));

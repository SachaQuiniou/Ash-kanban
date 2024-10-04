import { Router } from 'express';
import { cardController } from '../controllers/cardController.js';
import { catchErrors as ce } from '../middlewares/catchErrors.js';

export const cardRouter = Router();

cardRouter.get('/cards', ce(cardController.index));

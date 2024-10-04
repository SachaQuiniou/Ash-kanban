import { Router } from 'express';
import { listController } from '../controllers/listController.js';
import { catchErrors as ce } from '../middlewares/catchErrors.js';

export const listRouter = Router();

listRouter.get('/lists', ce(listController.index));
listRouter.get('/lists/:id(\\d+)', ce(listController.show));

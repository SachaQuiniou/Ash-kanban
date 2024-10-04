import { Router } from 'express';
import { listController } from '../controllers/listController.js';
import { catchErrors as ce } from '../middlewares/catchErrors.js';

export const listRouter = Router();

listRouter.get('/lists', ce(listController.index));
listRouter.get('/lists/:id(\\d+)', ce(listController.show));

listRouter.post('/lists', ce(listController.store));

listRouter.patch('/lists/:id(\\d+)', ce(listController.update));

listRouter.delete('/lists/:id(\\d+)', ce(listController.destroy));

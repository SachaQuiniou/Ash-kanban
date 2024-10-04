import { Router } from 'express';
import { tagController } from '../controllers/tagController.js';
import { catchErrors as ce } from '../middlewares/catchErrors.js';

export const tagRouter = Router();

tagRouter.get('/tags', ce(tagController.index));

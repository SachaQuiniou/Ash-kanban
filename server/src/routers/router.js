import { Router } from 'express';
import { listRouter } from './listRouter.js';
import { cardRouter } from './cardRouter.js';
import { tagRouter } from './tagRouter.js';

export const router = Router();

router.use(listRouter);
router.use(cardRouter);
router.use(tagRouter);

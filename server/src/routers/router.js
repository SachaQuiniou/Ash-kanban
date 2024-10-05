import { Router } from 'express';
import { listRouter } from './listRouter.js';
import { cardRouter } from './cardRouter.js';
import { tagRouter } from './tagRouter.js';

export const router = Router();

router.get('/', (req, res) => {
    res.redirect(301, '/lists');
});

router.use(listRouter);
router.use(cardRouter);
router.use(tagRouter);

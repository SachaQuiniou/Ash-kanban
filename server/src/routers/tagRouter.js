import { Router } from 'express';
import { tagController } from '../controllers/tagController.js';
import { catchErrors as ce } from '../middlewares/catchErrors.js';

export const tagRouter = Router();

tagRouter.get('/tags', ce(tagController.index));
tagRouter.get('/tags/:id(\\d+)', ce(tagController.show));

tagRouter.post('/tags', ce(tagController.store));

tagRouter.patch('/tags/:id(\\d+)', ce(tagController.update));
tagRouter.patch(
    '/cards/:cardId(\\d+)/tags/:tagId(\\d+)',
    ce(tagController.assignTagToCard)
);

tagRouter.delete('/tags/:id(\\d+)', ce(tagController.destroy));
tagRouter.delete(
    '/cards/:cardId(\\d+)/tags/:tagId(\\d+)',
    ce(tagController.removeTagFromCard)
);

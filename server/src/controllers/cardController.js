import { Card } from '../models/associations.js';

export const cardController = {
    async index(req, res) {
        const cards = await Card.findAll({
            include: [{ association: 'tags' }],
        });
        res.json(cards);
    },
};

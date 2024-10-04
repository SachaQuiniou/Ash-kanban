import { List } from '../models/associations.js';

export const listController = {
    async index(req, res) {
        const lists = await List.findAll({ include: 'cards' });
        res.json(lists);
    },

    async show(req, res, next) {
        const { id } = req.params;

        const list = await List.findByPk(id, {
            include: { association: 'cards', include: 'tags' },
        });

        if (!list) {
            return next();
        }

        res.json(list);
    },
};

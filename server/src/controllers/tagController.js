import { Tag } from '../models/associations.js';

export const tagController = {
    async index(req, res) {
        const tags = await Tag.findAll();
        res.json(tags);
    },
};

import { List } from '../models/associations.js';
import Joi from 'joi';
import sanitize from 'sanitize-html';

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

    async store(req, res, next) {
        const { title, position } = req.body;

        const schema = Joi.object({
            title: Joi.string().min(4).required(),
            position: Joi.number().integer().greater(0),
        });

        const { error } = schema.validate({ title, position });

        if (error) {
            return next(error);
        }

        const list = await List.create({ title: sanitize(title), position });

        res.status(201).json(list);
    },

    async update(req, res, next) {
        const { title, position } = req.body;
        const { id } = req.params;

        const schema = Joi.object({
            title: Joi.string().min(4),
            position: Joi.number().integer().greater(0),
        });

        const { error } = schema.validate({ title: sanitize(title), position });

        if (error) {
            return next(error);
        }

        const listUpdate = await List.findByPk(id);

        if (!listUpdate) {
            return next();
        }

        const updatedList = await listUpdate.update({
            title: sanitize(title) || listUpdate.title,
            position: position || listUpdate.position,
        });

        res.json(updatedList);
    },

    async destroy(req, res, next) {
        const { id } = req.params;

        const list = await List.findByPk(id);

        if (!list) {
            return next();
        }

        await list.destroy();

        return res.sendStatus(204);
    },
};

import Joi from 'joi';
import sanitize from 'sanitize-html';
import { Card, List } from '../models/associations.js';

export const cardController = {
    async index(req, res) {
        const cards = await Card.findAll({
            include: 'tags',
        });
        res.json(cards);
    },

    async show(req, res, next) {
        const { id } = req.params;

        const card = await Card.findByPk(id);

        if (!card) {
            return next();
        }

        res.json(card);
    },

    async store(req, res, next) {
        const schema = Joi.object({
            content: Joi.string().min(1).required(),
            listId: Joi.number().integer().greater(0).required(),
            position: Joi.number().integer().greater(0),
            color: Joi.string(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return next(error);
        }

        const { content, listId, position, color } = req.body;

        const list = await List.findByPk(listId);
        if (!list) {
            return next();
        }

        const createdCard = await Card.create({
            content: sanitize(content),
            listId,
            position,
            color,
        });

        res.status(201).json(createdCard);
    },

    async update(req, res, next) {
        const { id } = req.params;

        const schema = Joi.object({
            content: Joi.string().min(1),
            listId: Joi.number().integer().greater(0),
            position: Joi.number().integer().greater(0),
            color: Joi.string(),
        })
            .min(1)
            .message(
                "Missing body parameters. Provide at least 'content' or 'position' or 'list_id' or 'color' properties"
            );

        const { error } = schema.validate(req.body);
        if (error) {
            return next(error);
        }

        const { content, listId, position, color } = req.body;

        const card = await Card.findByPk(id);
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        if (listId) {
            const list = await List.findByPk(listId);
            if (!list) {
                return next();
            }
        }

        const updatedCard = await card.update({
            content: sanitize(content),
            listId,
            position,
            color,
        });

        res.json(updatedCard);
    },

    async destroy(req, res, next) {
        const { id } = req.params;

        const card = await Card.findByPk(id);
        if (!card) {
            return next();
        }

        await card.destroy();

        res.status(204).end();
    },
};

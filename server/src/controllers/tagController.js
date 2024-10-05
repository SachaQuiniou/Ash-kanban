import Joi from 'joi';
import sanitize from 'sanitize-html';
import { Tag, Card } from '../models/associations.js';

export const tagController = {
    async index(req, res) {
        const tags = await Tag.findAll();
        res.json(tags);
    },

    async show(req, res, next) {
        const { id } = req.params;

        const tag = await Tag.findByPk(id);
        if (!tag) {
            return next();
        }

        res.json(tag);
    },

    async store(req, res, next) {
        const schema = Joi.object({
            name: Joi.string().min(1).required(),
            color: Joi.string(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return next(error);
        }

        const tagExist = !!(await Tag.count({
            where: { name: req.body.name },
        }));
        if (tagExist) {
            return res
                .status(409)
                .json({ error: 'The provided tag name is already taken.' });
        }

        const { name, color } = req.body;
        const createdTag = await Tag.create({
            name: sanitize(name),
            color,
        });

        res.status(201).json(createdTag);
    },

    async update(req, res, next) {
        const { id } = req.params;
        const { name, color } = req.body;

        const schema = Joi.object({
            name: Joi.string().min(1),
            color: Joi.string(),
        })
            .min(1)
            .message(
                "Missing body parameters. Provide at least 'name' or 'color' property."
            );

        const { error } = schema.validate(req.body);
        if (error) {
            return next(error);
        }

        const tag = await Tag.findByPk(id);
        if (!tag) {
            return next();
        }

        const updatedTag = await tag.update({
            name: sanitize(name) || tag.name,
            color: color || tag.color,
        });

        res.json(updatedTag);
    },

    async destroy(req, res, next) {
        const { id } = req.params;

        const tag = await Tag.findByPk(id, { include: 'cards' });

        if (tag.cards.length) {
            return res.status(401).json({
                error: 'The tag is associated, you must first unassociate it',
            });
        }

        if (!tag) {
            return next();
        }

        await tag.destroy();

        res.status(204).end();
    },

    async assignTagToCard(req, res, next) {
        const tagId = parseInt(req.params.tagId);
        const cardId = parseInt(req.params.cardId);

        const tag = await Tag.findByPk(tagId);
        if (!tagId) {
            return next();
        }

        const card = await Card.findByPk(cardId);
        if (!cardId) {
            return next();
        }

        await card.addTag(tag);

        const updatedCard = await Card.findByPk(cardId, { include: ['tags'] });
        res.status(201).json(updatedCard);
    },

    async removeTagFromCard(req, res, next) {
        const tagId = parseInt(req.params.tagId);
        const cardId = parseInt(req.params.cardId);

        const tag = await Tag.findByPk(tagId);
        if (!tag) {
            return next();
        }

        const card = await Card.findByPk(cardId);
        if (!card) {
            return next();
        }

        await card.removeTag(tag);

        const updatedCard = await Card.findByPk(cardId, { include: ['tags'] });
        res.status(201).json(updatedCard);
    },
};

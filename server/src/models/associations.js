import { sequelize } from '../database/connection.js';
import { List } from './List.js';
import { Card } from './Card.js';
import { Tag } from './Tag.js';

export { List, Card, Tag, sequelize };

/***List <=> Card***/
List.hasMany(Card, {
    as: 'cards',
    foreignKey: 'listId',
});

Card.belongsTo(List, {
    as: 'list',
    foreignKey: 'listId',
});

/***Card <=> Tag***/
Card.belongsToMany(Tag, {
    as: 'tags',
    through: 'CardHasTag',
    foreignKey: 'cardId',
    otherKey: 'tagId',
});

Tag.belongsToMany(Card, {
    as: 'cards',
    through: 'CardHasTag',
    foreignKey: 'tagId',
    otherKey: 'cardId',
});

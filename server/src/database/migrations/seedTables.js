import { List, Card, Tag } from '../../models/associations.js';
import { sequelize } from '../connection.js';

async function seedTables() {
    try {
        console.log('Echantillonnage des données...');

        const lists = await List.bulkCreate([
            { title: 'Sprint 1', position: 1 },
            { title: 'Sprint 2', position: 2 },
            { title: 'Sprint 3', position: 3 },
        ]);

        const cards = await Card.bulkCreate([
            {
                content: 'Créer une base de données',
                position: 1,
                listId: lists[0].id,
            },
            {
                content: 'Insérer des données de test',
                position: 2,
                color: '#4ade80',
                listId: lists[0].id,
            },
            {
                content: 'Prendre une pause',
                color: '#22d3ee',
                listId: lists[1].id,
            },
        ]);

        const tags = await Tag.bulkCreate([
            { name: 'Urgent', color: '#ef4444' },
            { name: 'En retard', color: '#fbbf24' },
            { name: 'Plus tard' },
        ]);

        /* [test] - Association des tags aux cards*/
        await cards[0].setTags([tags[0], tags[1]]);
        await cards[2].addTag(tags[2]);

        console.log('Migration terminée avec succès.');
    } catch (error) {
        console.error('Erreur lors de le migration :', error);
    } finally {
        console.log('Fermeture de la base...');
        await sequelize.close();
    }
}

seedTables();

import { sequelize } from '../../models/associations.js';

async function createTables() {
    try {
        console.log('Supression des tables existantes...');
        await sequelize.drop();

        console.log('Définition des tables...');
        await sequelize.sync();
    } catch (error) {
        console.error('Erreur lors de le migration :', error);
    } finally {
        console.log('Migration OK ! Fermeture de la base...');
        await sequelize.close();
    }
}

createTables();

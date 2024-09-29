import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';

export class List extends Model {}

List.init(
    {
        title: {
            type: DataTypes.TEXT,
            validate: {
                len: [6, 55],
            },
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    },
    {
        sequelize,
        tableName: 'list',
    }
);

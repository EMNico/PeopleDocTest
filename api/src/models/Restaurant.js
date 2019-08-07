import DataTypes from 'sequelize';
import sequelize from './sequelize';

const Restaurant = sequelize.define('restaurant', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
});

export default Restaurant;

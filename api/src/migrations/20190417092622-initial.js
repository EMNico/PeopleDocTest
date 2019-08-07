export const up = async (queryInterface, Sequelize) => {
    await queryInterface.createTable('restaurant', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
};

export const down = async (queryInterface) => {
    await queryInterface.dropTable('restaurant');
};

import Restaurant from './Restaurant';

const models = { Restaurant };

Object.keys(models).forEach((modelName) => {
    const model = models[modelName];

    if (model.associate) {
        model.associate(models);

        delete model.associate;
    }
});

export { Restaurant };

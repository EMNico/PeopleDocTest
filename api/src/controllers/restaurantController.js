import { Router } from 'express';
import route from '../utils/route';
import { Restaurant } from '../models';

const router = new Router();

router.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll();

    return res.json(restaurants.map((restaurant) => restaurant.toJSON()));
});

router.get('/random', route(async (req, res) => {
    const restaurants = await Restaurant.findAll();

    return res.json(restaurants[Math.floor(Math.random() * restaurants.length)]);
}));

router.post('/', route(async (req, res) => {
    const { name, address } = req.body;

    const existingRestaurants = await Restaurant.findOne(
        {
            where: {
                name,
            },
        },
    );
    if (existingRestaurants) {
        // TODO throw error
        return null;
    }
    const newRestaurant = { name, address };


    return res.json(await Restaurant.create(newRestaurant));
}));

router.delete('/:name', route(async (req) => {
    await Restaurant.destroy({
        where: {
            name: req.params.name,
        },
    });

    return null;
}));

export default router;

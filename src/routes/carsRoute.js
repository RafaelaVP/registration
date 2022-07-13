const CarsController = require('../app/controller/CarsController');


module.exports = (server, routes, prefix = '/api/v1/cars') => {
    routes.post('/', CarsController.create);
    routes.get('/', CarsController.findAll);
    routes.put('/:id', CarsController.update);
    routes.delete('/:id', CarsController.delete);
    routes.get('/:id', CarsController.findById);
    
    server.use(prefix, routes);
}
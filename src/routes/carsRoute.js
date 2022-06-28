const CarsController = require('../app/controller/CarsController');


module.exports = (server, routes, prefix = '/api/v1/cars') => {
    routes.post('/', CarsController.create);
    server.use(prefix, routes);
}
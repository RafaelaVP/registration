const UserController = require('../app/controller/UserController');


module.exports = (server, routes, prefix = '/api/v1/user') => {
    routes.post('/', UserController.create);
    routes.get('/', UserController.findAll);
    routes.put('/:id', UserController.update);
    routes.delete('/:id', UserController.delete);
    routes.get('/:id', UserController.findByid);

    server.use(prefix, routes);
}
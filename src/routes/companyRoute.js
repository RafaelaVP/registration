const CompanyController = require('../app/controller/CompanyController');


module.exports = (server, routes, prefix = '/api/v1/company') => {
    routes.post('/', CompanyController.create);
    routes.get('/', CompanyController.findAll);
    routes.put('/:id', CompanyController.update);
    routes.delete('/:id', CompanyController.delete);
    server.use(prefix, routes);
}
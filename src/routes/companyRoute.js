const CompanyController = require('../app/controller/CompanyController');


module.exports = (server, routes, prefix = '/api/v1/company') => {
    routes.post('/', CompanyController.create);
    server.use(prefix, routes);
}
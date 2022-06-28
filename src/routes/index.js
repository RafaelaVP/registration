const { Router } = require('express');
const user = require('./userRoute');
const company = require('./companyRoute');
const cars = require('./carsRoute');

module.exports = (server) => {
    server.use((req,res, next)=> {
        user(server, new Router());
        company(server, new Router());
        cars(server, new Router());
        next();
    })
}
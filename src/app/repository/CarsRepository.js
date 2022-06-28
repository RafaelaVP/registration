const models = require('../models');

class CarsRepository {
  async create(payload) {
    const result = await models.cars.create(payload);
    return result;
  }
}
 module.exports = new CarsRepository();
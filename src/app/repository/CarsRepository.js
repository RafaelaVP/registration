const models = require('../models');

class CarsRepository {
  async create(payload) {
    const result = await models.cars.create(payload);
    return result;
  }
  async findAll(search) {
    const result = await models.cars.findAll(search);
    return result;
  }
  async update(id, payload) {
    const result = await models.cars.update(payload, id = {where:{id:id}});
    return result;
  }
  async delete(id) {
    const result = await models.cars.destroy(id = {where: {id:id}});
    return result;
  }
  async findById(id) {
    const result = await models.cars.findOne(id = {where:{id:id}});
    return result;
  }
}
 module.exports = new CarsRepository();
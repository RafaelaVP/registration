const models = require('../models');

class UserRepository {
  async create(payload) {
    const result = await models.user.create(payload);
    return result;
  }
  async findAll(search) {
    const result = await models.user.findAll(search);
    return result;
  }
  async update(id, payload) {
    const result = await models.user.update(payload, id = {where: {id:id}});
    return result;
  }
  async delete(id) {
    const result = await models.user.destroy(id = {where: {id:id}});
    return result;
  }
  async findById(id) {
    const result = await models.user.findOne(id = {where: {id:id}});
    return result;
  }
}
 module.exports = new UserRepository();
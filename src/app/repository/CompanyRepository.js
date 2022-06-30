const models = require('../models');

class CompanyRepository {
  async create(payload) {
    const result = await models.company.create(payload);
    return result;
  }

  async findAll(search) {
    const result = await models.company.findAll(search);
    return result;
  }

  async update(id, payload) {
    const result = await models.company.update(payload, id = {where:{id:id}});
    return result;
  }

  async delete(id) {
    const result = await models.company.destroy(id = {where:{id:id}});
    return result;
  }
}
 module.exports = new CompanyRepository();
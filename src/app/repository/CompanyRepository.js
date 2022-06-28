const models = require('../models');

class CompanyRepository {
  async create(payload) {
    const result = await models.company.create(payload);
    return result;
  }
}
 module.exports = new CompanyRepository();
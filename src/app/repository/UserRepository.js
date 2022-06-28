const models = require('../models');

class UserRepository {
  async create(payload) {
    const result = await models.user.create(payload);
    return result;
  }
}
 module.exports = new UserRepository();
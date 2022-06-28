const modelUser = require('../models');

class UserRepository {
  async create(payload) {
    const result = await modelUser.user.create(payload);
    console.log(result)
    return result;
  }
}
 module.exports = new UserRepository();
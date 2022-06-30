const UserRepository = require('../repository/UserRepository');

class UserService {
    async create(payload) {
        const result = await UserRepository.create(payload)
        return result;
    }

    async findAll(search) {
        const result = await UserRepository.findAll(search)
        return result;
    }

    async update(payload, id) {
        const result = await UserRepository.update(payload, id)
        return result;
    }
 
    async delete(id) {
        const result = await UserRepository.delete(id)
        return result;
    }

    async findById(id) {
        const result = await UserRepository.findOne(id)
        return result;
    }
}

module.exports = new UserService();
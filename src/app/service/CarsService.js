const CarsRepository = require('../repository/CarsRepository');

class CarsService {
    async create(payload) {
        const result = await CarsRepository.create(payload);
        return result;
    } 
    async findAll(search) {
        const result = await CarsRepository.findAll(search);
        return result;
    }
    async update(id, payload) {
        const result = await CarsRepository.update(id, payload);
        return result;
    }
    async delete(id) {
        const result = await CarsRepository.delete(id);
        return result;
    }
    async findById(id) {
        const result = await CarsRepository.findById(id);
        return result;
    }

}

module.exports = new CarsService();
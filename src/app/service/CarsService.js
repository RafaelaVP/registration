const CarsRepository = require('../repository/CarsRepository');

class CarsService {
    async create(payload) {
        const result = await CarsRepository.create(payload);
        return result;
    }
}

module.exports = new CarsService();
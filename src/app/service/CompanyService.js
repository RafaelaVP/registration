const CompanyRepository = require('../repository/CompanyRepository');

class CompanyService {
    async create(payload) {
        const result = await CompanyRepository.create(payload);
        return result;
    }

    async findAll(search) {
        const result = await CompanyRepository.findAll(search);
        return result;
    }

    async update(payload, id) {
        const result = await CompanyRepository.update(payload, id);
        return result;
    }

    async delete(id) {
        const result = await CompanyRepository.delete(id);
        return result;
    }
}

module.exports = new CompanyService();
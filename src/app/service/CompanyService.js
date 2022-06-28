const CompanyRepository = require('../repository/CompanyRepository');

class CompanyService {
    async create(payload) {
        const result = await CompanyRepository.create(payload);
        return result;
    }
}

module.exports = new CompanyService();
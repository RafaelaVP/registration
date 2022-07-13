const CompanyService = require('../service/CompanyService');

class CompanyController {
    async create(req,res) {
        try {
            const result = await CompanyService.create(req.body)
            console.log(result)
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async findAll(req, res) {
        try {
            const result = await CompanyService.findAll(req.query)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const update = req.body;
            const result = await CompanyService.update(id, update)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await CompanyService.delete(id);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async findByid(req, res) {
        try {
            const { id } = req.params;
            const result = await CompanyService.findById(id);
        return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
        
    }

}

module.exports = new CompanyController();
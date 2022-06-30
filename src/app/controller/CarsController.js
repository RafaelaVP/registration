const CarsService = require('../service/CarsService');

class CarsController {
    async create(req,res) {
        try {
            const result = await CarsService.create(req.body)
            console.log(result)
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async findAll(req, res) {
        try {
            const result = await CarsService.findAll(req.query)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const update = req.body;
            const result = await CarsService.update(id, update);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await CarsService.delete(id);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = new CarsController();
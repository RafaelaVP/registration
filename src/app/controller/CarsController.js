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
}

module.exports = new CarsController();
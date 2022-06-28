const UserService = require('../service/UserService');

class UserController {
    async create(req,res) {
        try {
            const result = await UserService.create(req.body)
            console.log(result)
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new UserController();
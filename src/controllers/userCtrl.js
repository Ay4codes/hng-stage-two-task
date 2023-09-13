const userServices = require("../services/user.services")
const response = require("../utils/response")

class userCtrl {
    async getAllUser (req, res) {
        const result = await userServices.getAllUser(req, res)
        if (result.users) res.status(200).json(response(true, 'All user fetched successfully', {users: result.users}))
    }

    async getUser (req, res) {
        const result = await userServices.getUser(req, res)
        if (result.user && result.status) res.status(200).json(response(true, 'User fetched successfully', {user: result.user}))
    }

    async updateUser (req, res) {
        const result = await userServices.updateUser(req, res)
        if (result.user && result.status) res.status(200).json(response(true, 'User updated successfully', {user: result.user}))
    }

    async deleteUser (req, res) {
        const result = await userServices.deleteUser(req, res)
        if (result.user && result.status) res.status(200).json(response(true, `User 'email: ${result.user.email}' deleted successfully`))
    }
}

module.exports = new userCtrl
const authServices = require("../services/auth.services")
const response = require("../utils/response")

class authCtrl {
    async register (req, res) {
        const result = await authServices.register(req, res)
        if (result.status && result.user) res.status(200).json(response(true, 'Registeration successful', {user: result.user}))
    }
}

module.exports = new authCtrl
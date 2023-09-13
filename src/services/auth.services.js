const User = require("../models/user.model")
const customError = require("../utils/custom-error")
const formartter = require("../utils/formartter")
const response = require("../utils/response")
const validatorsSchema = require("../utils/validators.schema")

class authServices {
    async register (req, res) {
        const { error, value: details } = validatorsSchema.onRegisterSchema(req.body)

        if (error) return res.status(400).json(customError.customResponse(false, 'Bad request', 'Invalid Input', null)).end()

        const emailExist = await User.findOne({email: details.email})

        if (emailExist) return res.status(409).json(response(false, 'Email already exist')).end()

        const userContext = {fullname: formartter.capitalizeEachWord(details.fullname), email: details?.email?.toLowerCase()}

        const newUser = await new User(userContext).save()

        return {status: true, user: newUser}
    }
}

module.exports = new authServices
const User = require("../models/user.model")
const customError = require("../utils/custom-error")
const formartter = require("../utils/formartter")
const validatorsSchema = require("../utils/validators.schema")

class userServices {
    async getAllUser () { // Get all users
        const users = await User.find({})

        return {users: users.length === 0 ? 'No Users' : users}
    }

    async getUser (req, res) { // Get User
        const { query } = req.params // Parameters

        if (!query) return res.status(400).json(customError.customResponse(false, 'Bad request', 'Please provide ID, email, or name'));
        
        let search_query = {};

        const isID = validatorsSchema.objectID(query); // Validate user id

        const isEmail = validatorsSchema.isEmail(query) // validate email

        isID ? search_query._id = query : isEmail ? search_query.email = query : search_query.fullname = formartter.capitalizeEachWord(query)
        
        const userExist = await User.findOne(search_query)

        if (!userExist) return res.status(404).json(customError.customResponse(false, 'User does not exist', `Unable to find user with ID or email or fullname: '${query}'`));

        return {status: true, user: userExist}
    }

    async updateUser (req, res) { // Update user
        const { query } = req.params

        if (!query) return res.status(400).json(customError.customResponse(false, 'Bad request', 'Please provide ID, email, or name'));

        const newUpdateValue = req.body
        
        const validKeys = ['fullname', 'email']; // Approved updated field. Only fullname and email

        for (const key in newUpdateValue) // Loop thru to check

        if (newUpdateValue.hasOwnProperty(key) && !validKeys.includes(key)) return res.status(400).json(customError.customResponse(false, 'Bad request', `Invalid update key: ${key}`));
                
        let search_query = {};

        const isID = validatorsSchema.objectID(query);

        const isEmail = validatorsSchema.isEmail(query)

        isID ? search_query._id = query : isEmail ? search_query.email = query : search_query.fullname = formartter.capitalizeEachWord(query)

        const userExist = await User.findOne(search_query)

        if (!userExist) return res.status(404).json(customError.customResponse(false, 'Cannot update user', `Unable to find user with ID or email or fullname: '${query}'`));

        newUpdateValue.updated_at = Date.now()

        await User.updateOne(search_query, {$set: newUpdateValue});

        const user = await User.findOne(newUpdateValue)

        return {status: true, user: user}
    }

    async deleteUser (req, res) { // delete user
        const { query } = req.params

        if (!query) return res.status(400).json(customError.customResponse(false, 'Bad request', 'Please provide ID, email, or name'));

        const newUpdateValue = req.body
        
        const validKeys = ['fullname', 'email']; // Approved updated field. Only fullname and email

        for (const key in newUpdateValue) // Loop thru to check

        if (newUpdateValue.hasOwnProperty(key) && !validKeys.includes(key)) return res.status(400).json(customError.customResponse(false, 'Bad request', `Invalid update key: ${key}`));
                
        let search_query = {};

        const isID = validatorsSchema.objectID(query);

        const isEmail = validatorsSchema.isEmail(query)

        isID ? search_query._id = query : isEmail ? search_query.email = query : search_query.fullname = formartter.capitalizeEachWord(query)

        const userExist = await User.findOne(search_query)

        if (!userExist) return res.status(404).json(customError.customResponse(false, 'Cannot delete user', `Unable to find user with ID or email or fullname: '${query}'`));

        await User.deleteOne(search_query);

        return {status: true, user: userExist}
    }
}

module.exports = new userServices
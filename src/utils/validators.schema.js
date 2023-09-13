const Joi = require('joi');
const mongoose = require('mongoose');

class Validator {
    onRegisterSchema (body) {
        const schema = Joi.object({
            fullname: Joi.string().trim().required(),
            email: Joi.string().trim().email().required()
        });

        const result = schema.validate(body);

        return {error: result.error, value: result.value};
    }

    objectID (string) {
        const isValidObjectId = mongoose.Types.ObjectId.isValid(string);
    
        if (isValidObjectId) return true
        
        return false
    }

    isEmail (string) {
        const schema = Joi.string().email()

        const result = schema.validate(string);

        if (result.error) return false

        return true
    }
}

module.exports = new Validator
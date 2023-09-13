const logger = require('../logger');
const response = require('./response')
const rateLimit = require('express-rate-limit');

class RateLimitError extends Error {
    constructor(message) {
      super(message);
      this.name = 'RateLimitError';
    }
}
  

class customErr {
    customResponse (status, message, reason, data) {
        return {
            status: status,
            message: message,
            reason: reason,
            data: data
        }
    }

    customTooManyReqErr (err, req, res, next) {
        if (err instanceof RateLimitError) {
            logger.error(`Too many request`);
            return res.status(429).send(response(false, 'Too many request'));
        }
        next();
    }

    customErrLogger (message, reason, origin) {
        return {
            message: message,
            reason: reason,
            origin: origin
        }
    }
}

module.exports = new customErr
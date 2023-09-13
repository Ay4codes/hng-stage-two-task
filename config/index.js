const ms = require('ms')
require('dotenv').config()

const config = {
    APP_NAME: "hng-task-two",
    domain: {
        URL: 'https://hng-task-two-09r7.onrender.com'
    },
    auth: {
        jwt: {
            JWT_SECRET: process.env.JWT_SECRET || "jwt-little-secret",
            TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN ? ms(process.env.TOKEN_EXPIRES_IN) : ms("1h"),
            REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ? ms(process.env.REFRESH_TOKEN_EXPIRES_IN) : ms("30d"),
        },
        BCRYPT_SALT: Number(process.env.BCRYPT_SALT) || 10,
    },
    secutiry: {
        apikey: {
            ACCESS_KEY: process.env.ACCESS_KEY
        },
        ips: {
            WHITE_LISTED: process.env.WHITE_LISTED_IPS || [],
            STATIC_OUTBOUND: process.env.STATIC_OUTBOUND || []
        }
    },
    database: {
        connection: {
            MONGO_URI: process.env.MONGO_URI,
        }
    }
};

// console.log("CONFIGS:", CONFIGS); --->>> to check if config is set
module.exports = config;
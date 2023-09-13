const ms = require('ms')
require('dotenv').config()

const config = {
    APP_NAME: "hng-task-two",
    domain: {
        URL: 'https://hng-task-two-09r7.onrender.com'
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
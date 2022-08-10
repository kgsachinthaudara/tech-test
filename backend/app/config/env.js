const env = {
    database : process.env.DB_SCHEMA,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool:{
        max: 5,
        min: 0, 
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL);
        console.log("Data base is Online:- ", connect.connection.host,connect.connection.name,connect.connection.port);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
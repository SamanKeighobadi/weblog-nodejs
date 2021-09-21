const mongoose = require('mongoose');

const Database = async() => {
    try {
        const connection =await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected : ${connection.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = Database;
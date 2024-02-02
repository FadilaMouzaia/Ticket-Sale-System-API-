const mongoose = require("mongoose")


const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI).connection

        console.log("Database Connected ....")
    }catch (error) {
        process.exit(1)
        console.error(error)
    }
   
}

module.exports = connectDB
const mongoose = require("mongoose")


const clientSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add your first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please add your last name"]
    },
    ticketId: {
        type: String,
        required: true
    },
    ticketNumber: {
        type: Number,
        required: true
    }
})



module.exports = mongoose.model("Client",clientSchema)
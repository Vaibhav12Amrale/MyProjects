const mongoose = require("mongoose");

const schema = mongoose.Schema;

const datacheema = new schema({
    username: {
        type: String,
       
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    roleTypeId: {
        type: Number,
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model("recorddata", datacheema);
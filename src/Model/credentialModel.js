const mongoose = require("mongoose")

const credentialSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    OTP : {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now(),
        // expiry: 60
        // index: {expires: 300}
    }
})


const CredentialModel = mongoose.model("credential",credentialSchema)
module.exports = CredentialModel
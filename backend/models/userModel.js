import mongoose from "mongoose";

const phoneSchema = mongoose.Schema({
    number: {
        type: String,
        match: "(?:(?<=^)|(?<=\D))((00|\+)?55(\s|\.|-)*)?((\()?0?\d{2}(?(5)\)|)(\s|\.|-)*)?(9(\s|\.|-)*)?\d{4}(\s|\.|-)*\d{4}(?=\D|$)",
        required: true
    },
    ddd: {
        type: String,
        required: true
    }
});

const userSchema = mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true,
       unique: true
   },
   password: {
       type: String,
       required: true
   },
   phones: [phoneSchema]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;


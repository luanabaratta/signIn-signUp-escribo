import mongoose from "mongoose";

const phoneSchema = mongoose.Schema({
    number: {
        type: String,
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


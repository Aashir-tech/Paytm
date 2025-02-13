const mongoose = require('mongoose')

// mongoose.connect("mongodb+srv://aashirharis6:aashir7834@cluster.7paoqdf.mongodb.net/Paytm-Clone");
const MONGO_URI = 'mongodb+srv://aashirharis6:YV7KwxiMU8pnhXNn@cluster.7paoqdf.mongodb.net/Paytm-Clone'

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.error("MongoDB Connection Failed:", error);
      process.exit(1);
    }
  };


const userSchema = mongoose.Schema({
    username : String,
    password: String,
    firstName : String,
    lastName : String,
    phoneNumber : Number
})

const accountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance : {
        type : Number,
        required : true
    }
})

const User = mongoose.model("User" , userSchema);
const Account = mongoose.model("Account" , accountSchema)

module.exports = {
    User,
    Account,
    connectDB
}
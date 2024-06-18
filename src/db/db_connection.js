const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log("db-connected");   
    }catch (e) {
        console.log(e, "error in connecting DB");
    }
};

model.exports = connectDB;
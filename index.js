const express =require("express");
const { mongoose } =require("./db");
const { connectDb } =require("./db");
const bodyParser = require("body-parser");
const cors =require("cors")
// const jwt =require("jsonwebtoken");


const app = express()

app.use(bodyParser.json());
app.use(cors());

// const mongoDB = 
//     "mongodb+srv://abdullamohamed406:mohamed003@cluster0.cpqs8qc.mongodb.net/nodejstask3";

    app.get("/", async (request, response) => {
      await mongoose.connect(mongoDB);
      console.log(mongoose.connection.readyState);
    
      if (mongoose.connection.readyState == 1) {
        response.send("Server Started and Connected to db");
      } else {
        response.send("Server Started");
      }
    });
  

app.listen(4000, () => {
    console.log("server started");
});
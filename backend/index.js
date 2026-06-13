require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const holdingsRoute = require("./routes/holdingsRoute");
const positionsRoute = require("./routes/positionsRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/user", userRoute);
app.use("/orders", orderRoute);









mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log("DB Connected");
})
.catch((err)=>{
   console.log(err);
});

app.listen(PORT,()=>{
   console.log(`App listening on ${PORT}`);
});

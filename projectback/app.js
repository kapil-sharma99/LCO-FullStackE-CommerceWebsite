require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
//My routes
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");


//My DB connections 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("DB CONNECTED");
});

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes as middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);

//Ports
const port = process.env.PORT || 8000;
//Starting a server
app.listen(port, () => {
    console.log(`App is running at ${port} port`);
});
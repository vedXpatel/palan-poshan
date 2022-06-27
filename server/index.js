const express = require('express')
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const consultation = require("./routes/consultation");
const awwRoutes = require("./routes/aww-routes");
const awwDeliveredRoutes = require("./routes/aww-delivered");
const fmchRoutes = require("./routes/fmch-routes");
require('dotenv').config()
const dotenv =require('dotenv');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const PORT = process.env.PORT || 5000;

app.use('/', consultation);
app.use('/awwdashboard', awwRoutes);
app.use('/fmchdashboard', fmchRoutes);
app.use('/awwDeliveredDashboard', awwDeliveredRoutes)

mongoose
    .connect(process.env.mongo_uri)
    .then(() => {
        console.log(`connected to database`);
    })
    .catch(err => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
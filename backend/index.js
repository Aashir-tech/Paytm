const express = require("express");
const cors = require("cors")
const app = express()
const {connectDB} = require('./db.js')

require('dotenv').config()

connectDB();

//Always keep it abpve your main router
app.use(cors())
app.use(express.json());

const mainRouter = require('./routes/index.js')

app.use("/api/v1" , mainRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT , () => {
    console.log(`Server running on ${PORT}`)
});
const express = require("express");
const cors = require("cors")
const app = express()

//Always keep it abpve your main router
app.use(cors())
app.use(express.json());

const mainRouter = require('./routes/index.js')

app.use("/api/v1" , mainRouter);

app.listen(3000);
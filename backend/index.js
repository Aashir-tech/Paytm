const express = require("express");
const cors = require("cors");
const app = express();
const { connectDB } = require("./db.js");

app.use(express.json());

//Always keep it abpve your main router
app.use(
  cors({
    origin: ["https://walletgo.vercel.app" , "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

require("dotenv").config();

connectDB();

app.get("/", (req, res) => {
  return res.json({
    message: "Server is working in good condition",
  });
});



const mainRouter = require("./routes/index.js");

app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

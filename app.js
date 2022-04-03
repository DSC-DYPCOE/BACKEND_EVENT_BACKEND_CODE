require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// router imports
const ideaRouter = require("./routes/ideaRoutes");

// connecting to the db
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB CONNECTED!`);
  } catch (err) {
    console.log(err);
  }
};
connectDB();

// importing thrid-party middleware
const cookieParser = require("cookie-parser");
const cors = require("cors");

// setting third-party middleware
app.use(cors());
app.use(cookieParser(process.env.SIGNED_COOKIE_SECRET));

// setting express middleware
app.use(express.json());

// setting routers
app.use("/api/v1/ideas", ideaRouter);

app.listen(PORT, console.log(`Server is running at port ${PORT}`));

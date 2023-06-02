const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { connectDataBase } = require("./utils/dbConnection");
const userRoute = require("./routes/userRoute");
const projectRoute = require("./routes/projectRoute");
dotenv.config();

connectDataBase();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Woking Fine" });
});

//Route
app.use("/api", userRoute);
app.use("/api/project", projectRoute);

//Error handlling
app.use((error, req, res, next) => {
  const errorMessage = error.message || "Something went wrong";
  const errorStatus = error.status || 500;

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`.gray.bold);
});

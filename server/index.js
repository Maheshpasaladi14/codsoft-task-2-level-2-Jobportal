const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv")
app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

// connect Db
dotEnv.config()
mongoose.connect(process.env.MONGO)
  .then(() => console.log("Db Connected"))
  .catch((err) => console.log(err));

// routers
const authRouter = require("./routes/auth.js");
const jobRouter = require("./routes/jobs.js");


//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Listening at Port ${PORT}`);
});

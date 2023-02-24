require("colors");
require("dotenv").config();
require("express-async-errors");
const port = process.env.PORT;
const cors = require("cors");
const express = require("express");

// LOCAL IMPORTS
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/error");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({ origin: ["https://familylibrary-api.onrender.com"] })
// );

// ROUTES
app.use("/api/users", require("./routes/user"));
app.use("/api/books", require("./routes/book"));
app.use("/api/base", require("./routes/base"));

// ERROR
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`.blue.bold));

// TODO Log all errors in a file

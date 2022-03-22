const express = require("express");
const connectDb = require("./config/connnectDB");
const ContactRoutes = require("./routes/contact");
const app = express();
const port = 5000;
connectDb();

app.use(express.json());

app.use("/api/contact", ContactRoutes);

app.listen(port, () => console.log(`port is running on port ${port}`));

const express = require("express");
const { registrationRouter } = require("./Routes/registrationRoutes");

//Conectdb
const { db } = require("./Conectdb/dataBase");

const app = express();

// Enable incoming JSON data
app.use(express.json());

//enpoints
app.use("/api/v1/registration", registrationRouter);

db.authenticate()
  .then(() => console.log("DataBase authenticate"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

// Spin up server
const PORT = 4090;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});

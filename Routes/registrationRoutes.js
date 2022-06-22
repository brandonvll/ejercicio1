const express = require("express");

// Middlewares
const {
  registrationExists,
} = require("../middlewares/registrationMiddlewares");

// Controller
const {
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../Controllers/registrationController");

const router = express.Router();

//route

router.post("/", createRegistration);

router.get("/:id", registrationExists);

router.delete("/:id", deleteRegistration);

router
  .route("/:id")
  .get(registrationExists)
  .patch(registrationExists, updateRegistration)
  .delete(registrationExists, deleteRegistration);

module.exports = { registrationRouter: router };

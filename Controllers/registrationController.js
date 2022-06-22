const { Registration } = require("../Model/registrationModel");

const getAllRegistration = async (req, res) => {
  try {
    const registration = await Registration.findAll();

    res.status(200).json({
      registration,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { RegistrationId } = req.body;

    const newRegistration = await Registration.create({ RegistrationId });

    res.status(201).json({ newRegistration });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const registration = await Registration.findOne({ where: { id } });

    await registration.update({ title, content });

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    await registration.update({ status: "deleted" });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistration,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};

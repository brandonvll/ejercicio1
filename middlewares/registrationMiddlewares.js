const { Registration } = require("../Model/registrationModel");

const registrationExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "No registration found with the given id",
      });
    }

    req.registration = registration;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registrationExists };

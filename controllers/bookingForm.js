const bookingForm = require("../models/bookingForm");

async function create(req, res) {
  try {
    // req.body will have the info that the bookingForm filled out on the frontend
    const createdbookingForm = await bookingForm.create(req.body);
    if (createdbookingForm) {
      res.status(201).send(createdbookingForm);
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

module.exports = {
  create,
};

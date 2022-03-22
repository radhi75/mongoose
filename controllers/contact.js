const ContactSchema = require("../models/contact");

exports.AddContact = async (req, res) => {
  const { name } = req.body;
  try {
    const contact = new ContactSchema(req.body);
    const found = await ContactSchema.findOne({ name });
    if (found) {
      return res.status(400).send("contact already exists ");
    }
    await contact.save();
    res.status(200).send({ msg: "contact is added", contact });
  } catch (error) {
    res.status(500).send("could not add user");
  }
};

exports.GetContacts = async (req, res) => {
  try {
    const contacts = await ContactSchema.find();
    res.status(200).send({ msg: "your contact list", contacts });
  } catch (error) {
    res.status(500).send("could not get contact list");
  }
};
exports.DeleteContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "contact deleted" });
  } catch (error) {
    res.status(500).send("could not delete");
  }
};

exports.UpdateContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).send("contact updated");
  } catch (error) {
    res.status(500).send("could not update");
  }
};
exports.GetOneContact = async (req, res) => {
  try {
    const contact = await ContactSchema.findById(req.params.id);

    res.status(200).send({ msg: "your contact", contact });
  } catch (error) {
    res.status(500).send("could not found contact");
  }
};

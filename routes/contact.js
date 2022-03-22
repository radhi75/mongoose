const express = require("express");
const {
  AddContact,
  GetContacts,
  DeleteContact,
  UpdateContact,
  GetOneContact,
} = require("../controllers/contact");

const ContactRoutes = express.Router();

ContactRoutes.post("/", AddContact);

ContactRoutes.get("/", GetContacts);


ContactRoutes.delete("/:id", DeleteContact);


ContactRoutes.put("/:id", UpdateContact);



ContactRoutes.get("/:id", GetOneContact);

module.exports = ContactRoutes;

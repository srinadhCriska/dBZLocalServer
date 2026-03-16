const express = require("express");

const {
  validateUsername,
  validateNewChar,
  validateProvidedChar,
} = require("./validations/validation");

const {
  registeredCharController,
} = require("./controllers/registartionController.controller");
const {
  getCharDetails,
} = require("./controllers/getUserByNameCtrl.controller");
const { addCharFunc } = require("./controllers/addUserController.controller");

const app = express();

app.use(express.json());

app.post("/registration", validateUsername, registeredCharController);

app.post("/character", validateProvidedChar, getCharDetails);

app.post("/addNewChar", validateNewChar, addCharFunc);

app.listen(3030, () => {
  console.log("Server started at port 3030");
});

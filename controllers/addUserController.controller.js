const { getCharacterFunc } = require("../service/getCharacterData");

const addCharFunc = (req, res) => {
  const newCharData = req.body;
  const charsData = getCharacterFunc();

  charsData.items.push(newCharData);

  res.status(200).json(charsData);
};

module.exports = {
  addCharFunc,
};

const registeredCharController = (req, res) => {
  res.status(200).json({
    code: "1111",
    message: "User registered successfully",
  });
};

module.exports = {
  registeredCharController,
};

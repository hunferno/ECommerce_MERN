const User = require("../models/User");
const CryptoJs = require("crypto-js");
const router = require("express").Router();

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASS
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.SECRET_PASS
    );
    const Originalpassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    Originalpassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    //On enleve le psw des données retournées
    const { password, ...others } = user._doc;

    res.status(201).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

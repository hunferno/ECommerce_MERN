const Cart = require("../models/Cart");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE A USER CART
router.post("/", verifyToken, async (req, res) => {
  const newCART = new CART(req.body);
  try {
    const savedCART = await newCART.save();
    res.status(200).json(savedCART);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE A USER CART
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCART = await CART.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCART);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE A USER CART
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET A USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL USER CART
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

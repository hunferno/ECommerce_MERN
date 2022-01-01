const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: String,
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true } //PERMET DE CREER LE CREATEDAT ET UPDATEDAT
);

module.exports = mongoose.model("Cart", CartSchema);
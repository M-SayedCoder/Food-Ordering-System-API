const mongoose = require("mongoose");
const Joi = require("joi");

// Define the Food schema
const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  discount: Number,
  image: String,
  restaurant: String,
  categories: [String],
  isAvailable: Boolean,
});

const Food = mongoose.model("Food", foodSchema);

// Joi Validation
function handleFoodValidation(food) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(20).required(),
    price: Joi.number().min(0).required(),
    discount: Joi.number().min(0).required(),
    image: Joi.string().uri().required(),
    restaurant: Joi.string().min(3).required(),
    categories: Joi.array().items(Joi.string()).required(),
    isAvailable: Joi.boolean().required(),
  });
  return schema.validate(food, { abortEarly: false });
}

exports.Food = Food;
exports.handleFoodValidation = handleFoodValidation;

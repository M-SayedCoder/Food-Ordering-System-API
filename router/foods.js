const { Food, handleFoodValidation } = require("../models/foods");
const express = require("express");
const router = express.Router();

// BONUS: Get available foods only

router.get("/available", async (req, res) => {
  const foods = await Food.find({ isAvailable: true }).sort({ name: 1 });
  res.status(200).send(foods);
});

// Get All Foods - sorted alphabetically by name

router.get("/", async (req, res) => {
  const filter = {};

  if (req.query.restaurant) {
    filter.restaurant = { $regex: req.query.restaurant, $options: "i" };
  }

  const foods = await Food.find(filter).sort({ name: 1 });
  res.status(200).send(foods);
});

// Get Food By ID
router.get("/:id", async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).send("The food with the given ID was not found.");
  }
  res.status(200).send(food);
});

// Create New Food
router.post("/", async (req, res) => {
  const { error } = handleFoodValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  const foodData = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    discount: req.body.discount,
    image: req.body.image,
    restaurant: req.body.restaurant,
    categories: req.body.categories,
    isAvailable: req.body.isAvailable,
  });

  const result = await foodData.save();
  res.status(201).send(result);
});

// Update Food
router.patch("/:id", async (req, res) => {
  const { error } = handleFoodValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).send("Food not found.");
  }

  const updatedFood = await Food.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
      image: req.body.image,
      restaurant: req.body.restaurant,
      categories: req.body.categories,
      isAvailable: req.body.isAvailable,
    },
    { new: true }
  );

  res.status(200).send(updatedFood);
});

// Delete Food
router.delete("/:id", async (req, res) => {
  const food = await Food.findByIdAndDelete(req.params.id);
  if (!food) {
    return res.status(404).send("Food not found.");
  }
  res.status(200).send("Food deleted successfully.");
});

module.exports = router;

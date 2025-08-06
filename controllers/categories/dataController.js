const Category = require('../../models/category');
const Workout = require('../../models/workout'); 
const dataController = {};

// Get all categories
dataController.index = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.locals.data.categories = categories;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Create a new category
dataController.create = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.locals.data.category = category;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


dataController.show = async (req, res, next) => {
  try {
    // Find the category and populate its workouts
    const category = await Category.findById(req.params.id).populate('workouts');
    if (!category) {
      throw new Error(`Could not find a category with ID ${req.params.id}`);
    }

    // Fetch all workouts in the system
    const allWorkouts = await Workout.find();

    // Pass both to the view
    res.locals.data.category = category;
    res.locals.data.allWorkouts = allWorkouts;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


// Update a category
dataController.update = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.locals.data.category = category;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Delete a category
dataController.destroy = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = dataController;

const Workout = require('../../models/workout.js')

// API workout controllers - returns JSON responses
const apiController = {
  // Get all workout for authenticated user
  index(req, res) {
    res.json(res.locals.data.workouts)
  },

  // Get one workout
  show(req, res) {
    res.json(res.locals.data.workout)
  },

  // Create new workout
  create(req, res) {
    res.status(201).json(res.locals.data.workout)
  },

  // Update workout
  update(req, res) {
    res.json(res.locals.data.workout)
  },

  // Delete workout
  destroy(req, res) {
    res.status(200).json({ message: 'Workout successfully deleted' })
  }
}

module.exports = apiController 
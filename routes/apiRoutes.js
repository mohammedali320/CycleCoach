const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/apiController')
const workoutApiController = require('../controllers/workouts/apiController')
const workoutDataController = require('../controllers/workouts/dataController')

// User API Routes
router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)

// workout API Routes
router.get('/workouts', userApiController.auth, workoutDataController.index, workoutApiController.index)
router.get('/workouts/:id', userApiController.auth, workoutDataController.show, workoutApiController.show)
router.post('/workouts', userApiController.auth, workoutDataController.create, workoutApiController.create)
router.put('/workouts/:id', userApiController.auth, workoutDataController.update, workoutApiController.update)
router.delete('/workouts/:id', userApiController.auth, workoutDataController.destroy, workoutApiController.destroy)

module.exports = router 
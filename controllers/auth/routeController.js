const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const categoriesViewController = require('../categories/viewController')
const workoutDatacont=require('../workouts/dataController').show

router.post('/', dataController.createUser, viewController.redirectToLogin)// signup user => login page
router.get('/', viewController.signUp) // show sign up form
router.post('/login', dataController.loginUser, categoriesViewController.redirectHome)
router.get('/login', viewController.signIn) // show login form
router.put('/:id', dataController.updateUser)
router.delete('/:id', dataController.auth, dataController.deleteUser)
router.get('/schedule',dataController.auth,dataController.showUserSchedule,viewController.showSchedule);
router.get('/schedule/workout/:id',dataController.auth,
  workoutDatacont, // use the workout show logic
  viewController.viewScheduleWorkout // this will render the new page
);


module.exports = router
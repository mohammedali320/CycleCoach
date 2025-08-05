const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')

// Index
router.get('/', 
    authDataController.auth /* check if the token exists in the header*/ , 
    dataController.index /*grab and save the logged in user's */, 
    viewController.index /* display the logged in users and link new page with the token*/
);
// New
router.get('/new', authDataController.auth, viewController.newView );
// Delete
router.delete('/:id',authDataController.auth, dataController.destroy, viewController.redirectHome);
// Update
router.put('/:id', authDataController.auth, dataController.update, viewController.redirectShow);
// Create
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome);
// Edit
router.get('/:id/edit',authDataController.auth, dataController.show, viewController.edit);
// Show
router.get('/:id', authDataController.auth,dataController.show, viewController.show);
//add workouts to user schedule
router.post('/add/:id', authDataController.auth, dataController.addToUser);

router.post('/remove/:id', authDataController.auth, dataController.removeFromUser);


// export router
module.exports = router;
const Workout = require('../../models/workout.js');


const dataController = {}
dataController.index = async (req,res,next) => {
   try {
    const user = await req.user.populate('workouts')
    res.locals.data.workouts = user.workouts
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.destroy = async (req, res, next ) => {
    try {
         await Workout.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req, res, next) => {
    try {
      res.locals.data.workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    try {
      res.locals.data.workout = await Workout.create(req.body)
      req.user.workouts.addToSet({_id:res.locals.data.workout._id})
      await req.user.save()
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req, res, next) => {
    try {
        res.locals.data.workout = await Workout.findById(req.params.id)
        if(!res.locals.data.workout){
            throw new error(`could not locate a workout with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


module.exports = dataController
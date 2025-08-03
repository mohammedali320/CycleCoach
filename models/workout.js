const mongoose = require("mongoose")

const workoutsSchema=new mongoose.Schema({
    title:{type: String ,required: true},
    duration:{type: Number ,required: true},
    description:{type: String ,required: true},
    intensity:   { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    category: [{type:mongoose.Schema.Types.ObjectId, ref:'Category'}]
})

module.exports=mongoose.model('Workouts',workoutsSchema)

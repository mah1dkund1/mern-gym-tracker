const mongoose = require('mongoose');

// workout will have exercises, exercises will have sets
// and sets will have a set num , reps and weight


const SetSchema = new mongoose.Schema( {

    setNumber: { type: Number, required: true},
    reps : {type: Number , required: true},
    weight : {type: Number , required: true}

});

const ExerciseSchema = new mongoose.Schema({

name: {type: String , required: true},
sets: [SetSchema]
});

const WorkoutSchema = new mongoose.Schema({
    name: {type: String , required: true},
    exercises: [ExerciseSchema]
},

{timestamps: true});

module.exports = mongoose.model('Workout' , WorkoutSchema)

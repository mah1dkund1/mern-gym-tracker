const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// below func will get all the workouts cuz we only
// need the workouts as a whole for editing and display
// no need to import the sets, exercises reps etc individually

router.get('/', async (req,res) => {
    try {
        const workouts = await Workout.find().sort( '-createdAt' );
        res.status(200).json(workouts);
            } catch(error) {
                res.status(500).json({ message: error.message });
            }
});

module.exports = router;
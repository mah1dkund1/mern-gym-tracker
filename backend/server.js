require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const app = express();
//const PORT = process.env.PORT || 5000;

app.use('/api/workouts' , workoutRoutes);
app.use(cors());
app.use(express.json());

app.get ('/', (req, res) => {
    res.send('BAckend is running, checking databse connection');

});

mongoose.connect (process.env.MONGO_URI)
 .then(() => {
    console.log('Succesfully connected to mongo');

    const PORT = process.env.PORT ||  5000;
    app.listen(PORT, () =>{
        console.log(`Server is blasting off on port ${PORT}`);
    
    });

 }
)

.catch((error) =>{
    console.error('Database connection failed: ', error.message);

});


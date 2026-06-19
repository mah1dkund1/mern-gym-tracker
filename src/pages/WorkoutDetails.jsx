import { useState} from 'react'
import { useParams } from 'react-router-dom'


function WorkoutDetails({workouts}) {

    const { id } = useParams()
    const [exerciseName, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')


    const workout = workouts.find(
        (w) => w.id.toString() === id
    )
    
    if (!workout) return <p>Workout not found</p>
    
    function handleAddExercise()
    {
        console.log("button clicked", exerciseName, sets, reps, weight)
        if(!exerciseName) return

        const newExercise = {
            id: Date.now(),
            name: exerciseName,
            sets,
            reps,
            weight
        } 

        const updatedWorkouts = workouts.map((w) => w.id.toString() === id   
        ? { ...w, exercises: [...w.exercises, newExercise] }
        : w    
    )
    
    setWorkouts(updatedWorkouts)

    setExerciseName('')
    setSets('')
    setReps('')
    setWeight('')

    }
    






    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-3xl font-bold mb-6">
                {workout.name}
            </h1>
       
       <div className="bg-white p-4 rounded-lg shadow mb-6">

        <h2 className="text-xl font-semibold mb-4">
            Add Exercise
            </h2>


<input
type="text"
placeholder="Exercise Name"
value={exerciseName}
onChange={(e) => setExerciseName(e.target.value)}
className="w-full border p-2 rounded mb-4"
/>

<div className="grid grid-cols-3 gap-4 mb-4">

    <input 
    type="number"
    placeholder="Sets"
    value={sets}
    onChange={(e) => setSets(e.target.value)}
    className="border p-2 rounded"
    />

    <input 
    type="number"
    placeholder="Reps"
    value={reps}
    onChange={(e) => setReps(e.target.value)}
    className="border p-2 rounded"
    />

    <input 
    type="number"
    placeholder="Weight"
    value={weight}
    onChange= {(e)=> setWeight(e.target.value)}
    className="border p-2 rounded"
    />

</div>


<button
onClick={handleAddExercise}
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Add Exercise
    
    </button>
       </div>
       
       
<div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-4">
    Exercises
    </h2>

    {workout.exercises.length === 0 ? (
        <p className="text-gray-500">No exercises added yet</p>) : (
            <ul className="space-y-2">
                {workout.exerises.map((exercise) => 
                ( 
                    <li key={exercise.id} className="border p-3 rounded">
                        <p className="font-semibold">{exercise.name}</p>
                        <p className="text-gray-600 text-sm">Sets: {exercise.sets} | Reps: {exercise.reps} | Weight: {exercise.weight}kg</p>
                    </li>

                ))}
            </ul>
        )
    
    }</div>

       
       
        </div>






    )
}

export default WorkoutDetails
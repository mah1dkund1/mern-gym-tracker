import { useState} from 'react'
import { useParams } from 'react-router-dom'
import backgroundImage from '../assets/background1.avif'



function WorkoutDetails({workouts, setWorkouts}) {

    const { id } = useParams()
    const [exerciseName, setExerciseName] = useState('')
   
    // const [sets, setSets] = useState('')
   
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    const [currentSets, setCurrentSets] = useState([])

    const workout = workouts.find(
        (w) => w.id.toString() === id
    )
    
    if (!workout) return <p>Workout not found</p>
    

function handleStageSet(){
    if(!reps || !weight) return

    const newSet = {
        setNumber: currentSets.length + 1,
        reps: parseInt(reps, 10),
        weight: parseFloat(weight)
    }

    setCurrentSets([...currentSets,  newSet])
    setReps('')
    setWeight('')
}


    function handleSaveExercise()
    {
        
        if (!exerciseName || currentSets.length === 0) return

        const newExercise = {
            id: Date.now(),
            name: exerciseName,
            sets: currentSets
        }
        
      

        const updatedWorkouts = workouts.map((w) => w.id.toString() === id   
        ? { ...w, exercises: [...(w.exercises || []), newExercise] }
        : w    
    )
    
    setWorkouts(updatedWorkouts)

    setExerciseName('')
    setCurrentSets([])

    }
    






    return (
       
<div style={{ backgroundImage: `url(${backgroundImage})` }} 
className="min-h-screen bg-cover bg-center bg-no-repeat p-6">

   <h1 className="text-3xl font-bold mb-6">{workout.name}</h1>

   {/* Box 1 , adding exercises and their details */}


   <div className="bg-white p-4 rounded-lg shadow mb-6">
    <h2 className="text-xl font-semibold mb-4">Add Exercise</h2>
    <input 
        type="text"
        placeholder="Exercise Name (e.g Dips)"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        className="w-full border p-2 rounded mb-4"

        />

        {/* form for adding individual sets */}

        <div className="bg-gray-50 p-3 rounded border mb-4">
            <h3 className="text-sm font-bold text-gray-600 mb-2">
                Configure Set #{currentSets.length+1}
            </h3>
       
       <div className="grid grid-cols-2 gap-4 mb-3">

        <input 
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="border p-2 rounded bg-white"
        />

        <input 
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={ (e) => setWeight(e.target.value)}
        className="border p-2 rounded bg-white"
        />
       </div>

       <button 
       type= "button"
       onClick={handleStageSet}
       className="w-full bg-gray-600 text-white text-sm py-1.5 rounded hover: bg-green-500"
       >
        + Add Set
       </button>
       
       </div>

       {/* below div is for showing live review of sets currently being added */}

{currentSets.length >0 && (
    <div className="mb-4 p-2 bg-blue-200 text-sm rounded border border-blue-200">
<p className="font-semibold text-blue-800 mb-1">Staged Sets:</p>
<ul className="list-disc pl-5 space-y-1">
    {currentSets.map((s)=> (
        <li key={s.setNumber}>
            Set {s.setNumber}: {s.reps} reps @ {s.weight}
        </li>
    ))}
</ul>

</div>

) }
    
< button 
 onClick={handleSaveExercise}
 disabled={!exerciseName || currentSets.length === 0}
 className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 
 disabled: bg-gray-800 disabled:cursor-not-allowed"
 >
    Save Entire Exercise
 </button>
 



   </div>

{/* Below is the code for the complete exercises already added*/}

<div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-xl font semibold mb-4"></h2>

{!workout.exercises || workout.exercises.length === 0 ? (
    <p className="text-gray-500">No Exercise Added yet</p>
) : (
    <ul className="space-y-4">
        {workout.exercises.map((exercise) => (
            <li key={exercise.id} className="border p-4 rounded bg-gray-50 shadow-sm">
                <p className="font-bold text-lg text-gray-800 mb-2">
                    {exercise.name}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {exercise.sets.map((s) =>
                    (
                        <div key={s.setNumber} className="big-white p-2 rounded border flex justify-between">
                            <span className="font-medium text-gray-500">
                                Set {s.setNumber}
                            </span>
                            <span className="font-medim text-gray-500">
                                reps x {s.weight}kg
                            </span>
                        </div>

                    )
                    )}
                </div>
            </li>
        ))}
    </ul>
)}


</div>

</div>

    )
}

export default WorkoutDetails
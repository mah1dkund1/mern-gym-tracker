import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard({workouts, setWorkouts}){


const navigate = useNavigate()

const [workoutName, setWorkoutName] = useState('')




function handleCreateWorkout(){

  if (workoutName.trim() == '')
  {
    return
  }

   const newWorkout = {

    id: Date.now(), 
    name: workoutName,
    exercises: []
   
   }

   setWorkouts([...workouts, newWorkout])
   setWorkoutName('')

}

  return(
    <div className="min-h-screen bg-gray-100 p-6">  
    
    <h1 className="text-3xl font-bold mb-6">
      Workout Tracker
    </h1>
    
    
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {
        /* Left Create Workout */}
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          Create Workout
        </h2>
      
      <input 
      type = "text"
      placeholder="Enter workout name"
      value={workoutName}
      onChange={(e) => setWorkoutName(e.target.value)}
      className="w-full border p-2 rounded"
      />
      
      
    
    <button onClick={handleCreateWorkout}
    className= "mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >

      Create Workout
    </button>
      
      </div>
      

      
      { /* Right: Workout History */}
      
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          Workout History
        </h2>
      
      
      {workouts.length === 0 ? (<p className="text-gray-500">No Workouts yet</p>) : 
      
      (
        <ul className="space-y-2">
          {workouts.map((workout) => 
          (
              <li key={workout.id}
              
               onClick={() => {
    console.log("CLICKED")
    navigate(`/workouts/${workout.id}`)
  }}
   className="border p-2 rounded cursor-pointer hover:bg-gray-100"
              >
              
              {workout.name}

              </li>

              


          ))}
        </ul>



      )}
         
      </div>
      



    </div>

   

    </div>

    
  )
}


export default Dashboard



import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import WorkoutDetails from './pages/WorkoutDetails'



function App()
{

const [workouts, setWorkouts] = useState([])

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Dashboard workouts={workouts} setWorkouts={setWorkouts} />} />
      
      <Route path="/workouts/:id" element={<WorkoutDetails workouts = {workouts} setWorkouts={setWorkouts} />}/>
      
      </Routes>
      </BrowserRouter>
  )
}


export default App
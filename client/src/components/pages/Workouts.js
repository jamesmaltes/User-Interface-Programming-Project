import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/userContext";
import { fetchData } from "../../main";


const Workouts = (props) => {
    const { user } = useContext(UserContext); // gives username of current user
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("/workout/get")
        .then(res => res.json())
        .then(data => setWorkouts(data))
    }, [workouts]
    )

    return(
        <div className="posted-workouts" id="posted-workouts">
  
          {workouts.map(workout => {
            const deleteWorkout = (e) => {
              e.preventDefault();
            
              fetchData('/workout/delete', { id: workout._id }, "DELETE")
              .then((data) => {
                  if(!data.message) {
                      setWorkouts(workouts);
                  }
              })
              .catch((error) => {
                  console.log(`${error.message}`);
              })
            }

                  <div key={workout._id} id={`workouts-container`} className='workouts-container'>
                    <form className="workout-form" onSubmit={deleteWorkout}>
                      <h2 className="workout"> {user.username}'s Workout: {workout.content}`</h2>
                      
                      <button type="submit" className="btn" id='del-btn'>Delete Workout</button>
                    </form>
                  </div>
                  }
            )}
        </div>
)}

export default Workouts;
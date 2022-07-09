import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/userContext";
import { fetchData } from "../../main";


const Workouts = () => {
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
            

                  <div key={workout._id} id={`workouts-container`} className='workouts-container'>
                  </div>
                  }
            )}
        </div>
)}

export default Workouts;
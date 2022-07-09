import { fetchData} from "../../main.js";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext.js";
import Workouts from "./Workouts";

const Profile = () => {
  
  const { user } = useContext(UserContext);
  const currentUser = user.username;

  const [workout, setWorkout] = useState({
    username: currentUser,
    content: ''
  });


  const { username, content } = workout;

  //functions

  // to display posts
  useEffect(() => {
  
  }, []);


  const createNewWorkout = () => {
    const newWorkout = document.getElementById('posted-workouts')
    let workoutText = document.createElement('h3');
    workoutText.innerHTML = (`${content}`);
    newWorkout.appendChild(workoutText);
  }


  const onChange = (e) => setWorkout({...workout, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/workout/create", 
      {
        username: currentUser,
       content: content
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        console.log(data)
        console.log(content)
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }

    //bootstrap and setup
    return (
      <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <h2>
            Welcome to your profile, { user.username }.
          </h2>
          <label htmlFor="workout-text" className="form-label">Write a workout:</label>
          <input 
            type="text" 
            className="form-control" 
            id="workout-text"
            name='content'
            onChange={onChange}
            value={content}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Post your workout"/>
        <div className="posted-workouts">

        </div>
      </form>
      <div>
        <Workouts>
        </Workouts>
      </div>
    </div>
    
    
    );
}

export default Profile;
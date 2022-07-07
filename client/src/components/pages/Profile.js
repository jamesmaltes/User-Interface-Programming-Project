import { fetchData} from "../../main.js";
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../../context/userContext.js";

const Profile = () => {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = useContext(UserContext);

  const [workout, setWorkout] = useState({
    content: ''
  });

  const { content } = workout;

  //functions
  const onChange = (e) => setWorkout(e.target.name, e.target.value)

  //creating new workout
  const CreateNewWorkout = () => {
    const newWorkout = document.getElementById('postedWorkouts');
        let workoutContent = document.createElement('h3');
        workoutContent.innerHTML = (`${content}`)
        newWorkout.appendChild(workoutContent);
  }


  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/workout/create", 
      {
       workout
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        console.log(data)
        CreateNewWorkout();
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }

  // obtaining all workouts posted
  window.onload = function getallWorkouts() {

    fetchData('/workout/show',
    {
        workout
    },

    "GET")
    .then((data) => {
        if(!data.message) {
            console.log(data)
        }
    })
    .catch((error) => {
        console.log(`Error! ${error.message}`)
    })
}


    //bootstrap and setup
    return (
      <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <h2>
            Welcome to your profile { user.username }.
          </h2>
          <label htmlFor="workouttext" className="form-label">Write a workout:</label>
          <input 
            type="text" 
            className="form-control" 
            id="workout-text"
            name='workout-text'
            onChange={onChange}
            value={content}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Post a new workout"/>
        <div className="postedWorkouts">

        </div>
      </form>
    </div>
    
    );
}

export default Profile;
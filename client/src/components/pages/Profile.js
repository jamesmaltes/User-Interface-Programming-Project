import { fetchData} from "../../main.js";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext.js";
import Workouts from "./Workouts";

const Profile = () => {
  
  const { user } = useContext(UserContext);

  const [workout, setWorkout] = useState({
    content: ''
  });

  const { content } = workout;

  //functions

  // to display posts
  useEffect(() => {
  
  }, []);

  const onChange = (e) => setWorkout({...workout, [e.target.name]: e.target.value})

  //creating new workout
  const CreateNewWorkout = () => {
    const newWorkout = document.getElementById('posted-workouts');
        let workoutContent = document.createElement('h3');
        workoutContent.innerHTML = (`${content}`)
        newWorkout.appendChild(workoutContent);
  }


  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/workout/create", 
      {
       content: content
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
            name='workout-text'
            onChange={onChange}
            value={content}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Post a new workout"/>
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
import { fetchData} from "../../main.js";
import { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Profile = () => {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const trainerId = state._id;

  const [workout, setWorkout] = useState({
    content: ''
  });

  const { content } = workout;

  //functions
  const onChange = (e) => setWorkout({...workout, [e.target.name]: e.target.value})

  //creating new workout
  const CreateNewWorkout = () => {
    const newWorkout = document.getElementById('postedWorkouts');
        let workoutContent = document.createElement('h3');
        workoutContent.innerHTML = (`${content}`)
        newWorkout.appendChild(workoutContent);
  }


  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/workout/createWorkout", 
      {
       trainerId,
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

    fetchData('/workout/getWorkouts',
    {
        trainerId
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
        <div className="profile">
            <h1>Your profile:</h1>
            <hr/>
            <div className="container">
                <form className="profileForm" onSubmit={onSubmit}>
                    <h1>Welcome</h1>
                <div className="mx-4 my-4">
                   <label htmlFor="post" className="form-label">Create a new workout:</label>
                   <input 
                      type="text" 
                      className="form-control" 
                      id="content"
                      name="content" 
                      onChange={onChange}
                      value={content}
                      required
                    />
                 </div>
                 <button type="submit" className="btn my-4">Post</button>
                </form>
            </div>
            <div className="postedWorkouts" id="postedWorkouts">

            </div>
            <div className="workouts" id="workouts">
            </div>

        </div>
    );
}

export default Profile;
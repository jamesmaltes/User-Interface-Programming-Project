import { fetchData } from "../../main.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js"

const Register = () => {

  const navigate = useNavigate();

  const { user, updateUser } = useContext(UserContext);

  const {username, password, password2} = user;  

  //functions
  const onChange = (e) => updateUser({...user, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/trainer/register", 
      {
       username,
       password
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        updateUser("authenticated", true)
        navigate("/workouts")
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }

  //bootstrap and setup
  return(
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Confirm Password:</label>
          <input 
            type="password" 
            className="form-control" 
            id="password2"
            name='password2'
            onChange={onChange}
            value={password2}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
    </div>
  );
}

export default Register;
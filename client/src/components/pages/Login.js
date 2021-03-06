import { fetchData } from "../../main.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js"


const Login = () => {
  
  const navigate = useNavigate();

  const { user, updateUser } = useContext(UserContext);

  const {username, password} = user;  

  //functions
  const onChange = (e) => updateUser(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/login", 
      {
       username,
       password
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        console.log(data);
        updateUser("authenticated", true);
        navigate("/profile");
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
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name="username"
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
            name="password"
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login"/>
      </form>
    </div>
    );
}

export default Login;
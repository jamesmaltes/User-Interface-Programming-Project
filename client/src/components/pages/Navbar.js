import { Outlet, Link, useNavigate } from "react-router-dom";
import { useContext, Fragment } from "react";
import UserContext from "../../context/userContext";

const Navbar = () => {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();


  const authenticated = (
    <Fragment>
      <h2>
        Welcome back, { user.username }.
      </h2>
      <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input type="text" placeholder="Search.."></input>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">

                <li className="nav-item">
                <Link className="nav-link" to="/Profile">Profile</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </Fragment>
  )

    const guest = (
      <Fragment>
        <h2>
          Welcome, guest.
        </h2>
        <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input type="text" placeholder="Search.."></input>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
                </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
      </Fragment>
    )

    return (
      <div>
        <nav className="navbar text-center">
          <div className="container">
          { user.authenticated ? authenticated : guest }    
          </div>
          
        </nav>
        <Outlet />
      </div>
    );
  }

export default Navbar;

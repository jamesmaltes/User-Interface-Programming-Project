import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(userContext);

  const authenticated = (
    <Fragment>
      <h2>
        Greetings, { user.username }.
      </h2>
    </Fragment>
  )

    const guest = (
      <Fragment>
        <h2>
          Welcome.
        </h2>
      </Fragment>
    )

    return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          { user.authenticated ? authenticated : guest }
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

                <li className="nav-item">
                <Link className="nav-link" to="/Profile">Profile</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
    );
}

export default Navbar;

// import your own logo instead

import './App.css';
import Workouts from './components/Workouts.js';
import Navbar from './components/Navbar.js';
import Register from './components/Register.js';
// import Login from './components/Login.js'
import Profile from './components/Profile.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Next Level Fitness</h1>
      <Workouts />
    </div>
  );
}

export default App;
// import your own logo instead

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/userContext';
import About from './components/pages/About.js'
import Workouts from './components/pages/Workouts.js';
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/Register.js';
import Login from './components/pages/Login.js';
import Profile from './components/pages/Profile.js';

const workouts = [
  {
    id: 12334,
    title: "Workout week 1"
  },
  {
    id: 34553,
    title: "Workout week 2"
  },
  {
    id: 55555,
    title: "workout week 3"
  },
]



function App() {
  return (
    <div className="App">
      <h1>Next Level Fitness</h1>
      <UserProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />}>
          <Route index element={<About />}/>
          <Route path="workouts" element={<Workouts workout={workouts}/>}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="profile" element={<Profile />}/>

        </Route>
      </Routes>
      </BrowserRouter>
      </UserProvider>
      
    </div>
  );
}

export default App;
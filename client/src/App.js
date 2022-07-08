import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/userContext';
import About from './components/pages/About.js'
import Workouts from './components/pages/Workouts.js';
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/Register.js';
import Login from './components/pages/Login.js';
import Profile from './components/pages/Profile.js';

function App() {
  return (
    <div className="App">
      <h1>Next Level Fitness</h1>
      <UserProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />}>
          <Route index element={<About />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="workouts" element={<Workouts />}/>

        </Route>
      </Routes>
      </BrowserRouter>
      </UserProvider>
      
    </div>
  );
}

export default App;
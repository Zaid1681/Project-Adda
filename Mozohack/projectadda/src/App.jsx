import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar_PA from './Components/Navbar/Navbar_PA'
import Landing from './Components/LandingPage/Landing';

function App() {
 

  return (
    <div>
      <Navbar_PA />
      <Landing />
    </div>
  )
}

export default App

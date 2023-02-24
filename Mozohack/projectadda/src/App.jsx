import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar_PA from './Components/Navbar/Navbar_PA'
import Landing from './Components/LandingPage/Landing';
import College from './Components/College/College';
import Department from './Components/Department/Department';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
 

  return (
    <div>
      <Router>
      <Navbar_PA />
      <Routes>
          
          <Route path='/' element= { <Landing /> } />
          {/* <Route path='/' element= { <Dashboard /> } /> */}
          <Route path='/college' element= { <College /> } />
          <Route path='/department' element= { <Department /> } />
          {/* <Route path='/login' element= { <Login /> } /> */}
          {/* <Route path='/college/department' element= { <Department /> } /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App

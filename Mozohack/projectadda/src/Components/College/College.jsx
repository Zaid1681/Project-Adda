import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './College.css'
import bg from '../../assets/bg.jpg'
import it from '../../assets/it.jpg'
import mech from '../../assets/mech.jpg'
import { useState ,useEffect} from 'react'
import axios from 'axios'


// {college_id}
export default function College() {

  const [departments, setDepartments] = useState()

  const sendRequest = async () => {
    const res = await axios.get("http://localhost:8000/api/department").catch((err) => {console.log(err)});
   
    //const res = await axios.get(`http://localhost:8000/api/department/college/${college_id}`).catch((err) => {console.log(err)});
    const data = await res.data;
    return data
  }

  useEffect(() => {
    sendRequest().then(data => setDepartments(data.departments))

  }, [])

  //console.log("Here", college_id);


  return (
    <div className='college mt-4'>
          {/* <Link to='/college'></Link>   */}
          <h1>College Name</h1>

          <div className='college-cards'>
        <div className="row g-5">




          {departments && departments.map((department, index) => (
            <div className="col-12 col-md-4" align="center">
              <Card style={{ width: '20rem' }} key={index} >
                <Card.Img variant="top" src={bg} />
                <Card.Body>
                  <Card.Title>{department.name}</Card.Title>
                  <Link to='/department'>
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>

            </div>
          ))}


        </div>

      
            
           
            
            
            

          </div>
          

        </div>
      
  )
}

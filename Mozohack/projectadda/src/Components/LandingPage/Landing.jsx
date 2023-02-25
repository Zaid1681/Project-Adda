import React from 'react'
import './Landing.css'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
import College from '../College/College';
import { useState ,useEffect} from 'react'
import axios from 'axios'



function Landing() {

  const [colleges, setColleges] = useState()

  const sendRequest = async () => {
    const res = await axios.get("http://localhost:8000/api/college").catch((err) => {console.log(err)});
    const data = await res.data;
    return data
  }

  useEffect(() => {
    sendRequest().then(data => setColleges(data.colleges))

  }, [])

  
  // const res = axios.get(`http://localhost:5000/api/college/user/${id}`).catch((err) => console.log(err))
  // const data = res.data
  // console.log(res.data);
  
  return (
    <div className='landing-bg'>
        <div className="content">
            <h1>Hey There</h1>
            <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto error ducimus est officiis dolorem modi mollitia cumque deleniti assumenda quos vero totam adipisci, quasi eligendi sit iste! Eveniet, nostrum iusto!</p>
            {/* <div className='btn btn-info mt-5'>
                Explore Now
            </div> */}
            <div>
                  <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" className='w-40'>
                          Search College
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='w-40'>
                          {colleges && colleges.map((college, index) => (
                              <Dropdown.Item key={index} >
                                <Link to='/college'>
                                    {college.name}
                                    {/* <College college_id={college._id} name={college.name}  /> */}
                                    {/* {console.log(colleges.map((college, index) => ( console.log(college.departments) )))} */}
                                    {console.log(colleges.name)}
                                    
                                </Link>
                              </Dropdown.Item>
                          ))}
                          
                          
                        
                      </Dropdown.Menu>
                  </Dropdown>
            </div>
        </div>
    </div>
  )
}

export default Landing
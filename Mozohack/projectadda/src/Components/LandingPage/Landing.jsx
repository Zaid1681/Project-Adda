import React from 'react'
import './Landing.css'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
import College from '../College/College';



function Landing() {
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
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Search College
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to='/college'>
                                VCET
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item href="/college">Thakur</Dropdown.Item>
                          <Dropdown.Item href="/college">UCOE</Dropdown.Item>
                        
                      </Dropdown.Menu>
                  </Dropdown>
            </div>
        </div>
    </div>
  )
}

export default Landing
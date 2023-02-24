import React from 'react'
import './Landing.css'
import Button from 'react-bootstrap/Button';

function Landing() {
  return (
    <div className='landing-bg'>
        <div className="content">
            <h1>Hey There</h1>
            <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto error ducimus est officiis dolorem modi mollitia cumque deleniti assumenda quos vero totam adipisci, quasi eligendi sit iste! Eveniet, nostrum iusto!</p>
            <div className='btn btn-info mt-5'>
                Explore Now
            </div>
        </div>
    </div>
  )
}

export default Landing
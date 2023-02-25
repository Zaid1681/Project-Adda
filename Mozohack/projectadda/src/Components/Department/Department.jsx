import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bg from '../../assets/bg.jpg'
import it from '../../assets/it.jpg'
import i1 from '../../assets/i1.jpg'
import mech from '../../assets/mech.jpg'
import { Link } from 'react-router-dom'
import './Department.css';
import { useEffect, useState } from "react";
import client from '../../client';


export default function Department() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "user"] {
      name,
      email,
      createdAt,
      updatedAt,
      projects[] {
        projectName,
        year,
        department,
        githubLink,
        projectLink,
        projectDescription,
        "imageUrl": projectImage.asset->url
      }
    }`).then((data) => {
            setUsers(data);
        }).catch(console.error);
    }, []);

    return (
        <div>
            <div className="department-content container mt-4">
                <h1>Department Name</h1>
            </div>

            {/* <Link to='/department'></Link> */}
            <div>
                <div className="carousel mt-5 mb-4">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={i1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={mech}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={bg}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>


            </div>

            <div className="department-content container mt-5">
                <h2>Here are the Projects:</h2>
            </div>

            <div>
                {users.map((user) => (
                <div className='container' key={user._id}>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card card-1">
                                <h6>Build by - {user.name}</h6>
                                {user.projects.map((project) => (
                                <h3>{project.projectName}</h3>
                                    ))}
                                <Link to='/Info'><p>More Info</p></Link>
                            </div>
                        </div>
                        {/* <div class="col-md-4">
                            <div class="card card-2">
                                <h3>Project 2</h3>
                                <h6>Build by - Anish </h6>
                                <Link to='/college'><p>More Info</p></Link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-3">
                                <h3>Project 3</h3>
                                <h6>Build by - Zaid Khan </h6>

                                <Link to='/college'><p>More Info</p></Link>

                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card card-3">
                                <h3>Project 4</h3>
                                <h6>Build by - Abhishek Jani </h6>

                                <Link to='/college'><p>More Info</p></Link>

                            </div>

                        </div> */}

                    </div>
                </div>
                    ))}
            </div>
        </div>
    )
}

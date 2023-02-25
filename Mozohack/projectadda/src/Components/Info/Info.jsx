// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
// import { Link, useParams, Navigate } from 'react-router-dom';
import client from '../../client';

import './Info.css';

const Info = () => {
    const [users, setUsers] = useState([]);

    // const { id } = useParams();

    useEffect(() => {
        client.fetch(`*[_type == "user"] {
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
        <>
            {users.map((user) => (
                <div key={user._id}>
                    <h2 className='text-center' style={{ margin: "10px 0px " }}>Student Data</h2>
                    {user && user.projects && user.projects.map((project) => (
                        <div className="moreInfo"  >

                            <div className="img" style={{ padding: "0px 20px" }}>
                                <img src={project.imageUrl} alt={project.projectName} style={{ width: "100%", height: "20rem", objectFit: "cover", opacity: "0.8" }} />
                            </div>
                            <div className="moreDetails p-10 text-sm-left" style={{ padding: " 20px 20px" }}>
                                <h1 className='p-10 text-sm-left' style={{
                                    fontSize
                                        : "40px"
                                }}><b> {project.projectName}</b></h1>
                                <hr style={{ margin: "0px 1200px 20px 0px  " }} />
                                <p style={{ fontSize: "18px", width: "80%   " }}> <b>Description: </b> <br /> {project.projectDescription}</p>
                                <p style={{ fontSize: "18px" }}>Department : <b>{project.department}</b> </p>
                                {/* <p>Year : </p> */}

                                <p>Github link: <a href={project.githubLink}>{project.githubLink}</a></p>
                                <p>Project link: <a href={project.projectLink}>{project.projectLink}</a></p>
                            </div>
                        </div>
                    ))}
                    {/* <Card style={{ width: '18rem' , margin :"auto" , alignItems:"center" }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}

                </div>
            ))}
        </>
    );
};

export default Info;

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bg from '../../assets/bg.jpg'
import it from '../../assets/it.jpg'
import i1 from '../../assets/i1.jpg'
import mech from '../../assets/mech.jpg'
import { Link } from 'react-router-dom'
import './Department.css'
export default function Department() {
    return (
        <div>
            <Link to='/department'></Link>
            <div>
                <div className="carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
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
                                className="d-block w-100"
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
                                className="d-block w-100"
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
                <div className='container'>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card card-1">
                                <h3>Project 1</h3>
                                <h6>Build by - Adi</h6>
                                <Link to='/college'><p>More Info</p></Link>
                            </div>
                        </div>
                        <div class="col-md-4">
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

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

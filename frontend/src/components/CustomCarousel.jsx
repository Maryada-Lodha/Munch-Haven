import './styles/CustomCarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

import CarouselImg1 from '../assests/images/carousel-img-1.jpg';
import CarouselImg2 from '../assests/images/carousel-img-2.jpg';
import CarouselImg3 from '../assests/images/carousel-img-3.jpg';


export default function CustomCarousel({ onSearch }) {

    const [searchItem, setSearchItem] = useState("")

    function handleSearchChange(e) {
        setSearchItem(e.target.value);      // To be able to type in the search bar
        onSearch(e.target.value)
    
        // This triggers the function written in the parent Home.jsx that is passed as a prop to this file, with a parameter that is the value in the search bar
    }

    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="carousel-img" src={CarouselImg1} alt="Burger"></img>
                <Carousel.Caption>
                    <Form inline>
                        <Row>
                            <div className='col-lg-3'></div>
                            <div className="col-lg-5">
                                <Form.Control type="text" placeholder="Search" className='search-bar' value={searchItem} onChange={handleSearchChange} />
                            </div>
                            <div className='col-lg-1'>
                                <Button type="submit">Seach</Button>
                            </div>
                            <div className='col-lg-3'></div>
                        </Row>
                    </Form>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={CarouselImg2} alt="Burger"></img>
                <Carousel.Caption>
                    <Form inline>
                        <Row>
                            <div className='col-lg-3'></div>
                            <div className="col-lg-5">
                                <Form.Control type="text" placeholder="Search" className='search-bar' />
                            </div>
                            <div className='col-lg-1'>
                                <Button type="submit">Seach</Button>
                            </div>
                            <div className='col-lg-3'></div>
                        </Row>
                    </Form>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="carousel-img" src={CarouselImg3} alt="Burger"></img>
                <Carousel.Caption>
                    <Form inline>
                        <Row>
                            <div className='col-lg-3'></div>
                            <div className="col-lg-5">
                                <Form.Control type="text" placeholder="Search" className='search-bar' />
                            </div>
                            <div className='col-lg-1'>
                                <Button type="submit">Seach</Button>
                            </div>
                            <div className='col-lg-3'></div>
                        </Row>
                    </Form>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

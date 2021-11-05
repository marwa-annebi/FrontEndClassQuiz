import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/esm/Container';
import  { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
return (
	<section className='slider'>
	<FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
	<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
	{SliderData.map((slide, index) => {
	  return (
		<div
		  className={index === current ? 'slide active' : 'slide'}
		  key={index}
		>
		  {index === current && (
			<img src={slide.image} alt='travel image' className='image' />
		  )}
		  <div >
		  <img src="cloud.png" className="anim1" />
		  </div>
		  <div >
		  <img src="cloud.png" className="anim2" />
		  </div>
		  <div >
		  <img src="cloud.png" className="anim3" />
		  </div>
		  <div >
		  <img src="cloud.png" className="anim4" />
		  </div>
		  <div >
		  <img src="cloud.png" className="anim5" />
		  </div>
		  <div >
		  <img src="cloud.png" className="anim6" />
		  </div>
		  <div className="rocket">		  <img src="rocket.png"></img></div>

		</div>
	  );
	})}
  </section>
);
};
export default ImageSlider

    {/* <Container className="container-fluid">
        <Row className="justify-content-md-center">


	<div style={{ display: 'block', width: 1000, padding: 30, }} >
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
    </Row>
    </Container> */}
	

  

  



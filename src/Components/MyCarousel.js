import Carousel from 'react-bootstrap/Carousel';
import  './style/MySlider.css';

function Slider() {
  return (
    <Carousel className='Carsol '>
    <Carousel.Item  >
      <img
       
        src={"/assets/images/img-0.jpeg"}
        alt="First slide"
      />
   
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={"/assets/images/img-1.jpg"}
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        src={"/assets/images/img-3.jpg"}
        alt="Third slide"
      />

   
    </Carousel.Item>
  </Carousel>
);
}

export default Slider;
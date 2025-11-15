import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/ExampleCarouselImage/makeup_PC._CB796616147_.png';
import img2 from '../assets/ExampleCarouselImage/Shampoos__conditioners_pc._CB796616147_.png';
import img3 from '../assets/ExampleCarouselImage/PC_Hero_1_3000._CB582457311_.jpg';

function Corousul() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='corousul'>
      <Carousel.Item>
        <img src= { img1 } className='d-block w-100' style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "center",
            }}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src= { img2 } className='d-block w-100' style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "center",
            width:"100%"}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src= { img3 } className='d-block w-100' style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%"
          }}/>
      </Carousel.Item>
    </Carousel>
  );
  
}

export default Corousul;
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

export const ImageCarousel = ({ images }) => {
  const carousel = useRef();

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: false,
  };

  console.log(images);

  return (
    <div className='relative w-full h-screen'>
      <Slider {...settings} ref={carousel}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} className='object-cover w-full h-screen' />
          </div>
        ))}
      </Slider>
      <div className='absolute top-0 w-full h-screen bg-gradient-to-t from-black to-transparent' />
    </div>
  );
};

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imagesForMobile, imagesForDesktop } from '../assets/imagesToSlide';

export const ImageCarousel = () => {
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

  return (
    <div className='relative w-full h-full '>
      <Slider {...settings}>
        {window.innerWidth > 768
          ? imagesForDesktop.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} className='object-cover w-full h-screen' />
              </div>
            ))
          : imagesForMobile.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} className='object-cover w-full h-screen' />
              </div>
            ))}
      </Slider>

      <div className='absolute top-0 w-full h-full bg-transparent bg-gradient-to-t from-black to-transparent' />
    </div>
  );
};

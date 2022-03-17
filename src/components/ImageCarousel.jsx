import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

export const ImageCarousel = ({ images }) => {
  const carousel = useRef();

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i].src} height='100%' width='100%' alt={images[i].alt} />
        </a>
      );
    },

    infinite: true,
    dots: true,
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
    <div className='w-full h-screen'>
      <Slider {...settings} ref={carousel}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} className='w-full h-screen object-cover' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

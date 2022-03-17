import { ImageCarousel } from '../components/ImageCarousel';
import { imagesToSlide } from '../assets/imagesToSlide';

export const MainView = () => {
  return (
    <div className='w-full h-screen'>
      <ImageCarousel images={imagesToSlide} />
    </div>
  );
};

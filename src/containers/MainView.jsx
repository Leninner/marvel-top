import { ImageCarousel } from '../components/ImageCarousel';
import { imagesToSlide } from '../assets/imagesToSlide';

export const MainView = () => {
  return (
    <main className='relative w-full h-screen'>
      <ImageCarousel images={imagesToSlide} />
    </main>
  );
};

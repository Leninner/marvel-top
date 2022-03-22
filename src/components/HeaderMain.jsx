import { motion } from 'framer-motion';
import marvelLogo from '../assets/marvelLogo.png';
import { HeaderLinksDesktop } from './HeaderLinksDesktop';
import { HeaderLinksMobile } from './HeaderLinksMobile';
import { useEffect, useState } from 'react';

export const HeaderMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('header');
      header.classList.toggle('abajo', window.scrollY > 0);
    });

    return () => {
      window.removeEventListener('scroll', function () {});
    };
  }, []);

  return (
    <motion.header
      className='fixed top-0 z-50 w-full h-[78px] bg-transparent duration-300 py-[30px] px-[20px] flex items-center justify-between text-white'
      initial={{
        y: -78,
      }}
      animate={{
        y: 0,
      }}>
      <img src={marvelLogo} alt='some' className='w-32 pl-2 md:pl-10' />

      <HeaderLinksDesktop />

      {isOpen && <HeaderLinksMobile />}

      <motion.span
        className='text-white material-icons-outlined md:hidden'
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          rotate: isOpen ? 180 : 0,
        }}>
        {isOpen ? 'close' : 'menu'}
      </motion.span>

      <div className='absolute left-0 w-full h-full bg-gradient-to-b from-black -z-10 to-transparent' />
    </motion.header>
  );
};

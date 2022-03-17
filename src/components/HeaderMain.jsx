import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeaderMain = () => {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('header');
      header.classList.toggle('abajo', window.scrollY > 0);
    });

    return () => {
      window.removeEventListener('scroll', function () {});
    };
  }, []);

  const navList = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <motion.header
      className='fixed top-0 z-10 w-full h-[78px] bg-transparent duration-300 py-[30px] px-[20px] flex items-center justify-between text-white'
      initial={{
        y: -78,
      }}
      animate={{
        y: 0,
      }}>
      <img src='' alt='some' className='pl-10' />

      <motion.nav
        className='w-1/2 pr-10'
        initial={{
          y: -50,
        }}
        animate={{
          y: 0,
        }}>
        <ul className='flex justify-between'>
          {navList.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
              <Link to={item.path}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <div className='absolute left-0 w-full h-full bg-gradient-to-b from-black -z-10 to-transparent' />
    </motion.header>
  );
};

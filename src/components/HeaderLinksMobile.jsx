import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeaderLinksMobile = () => {
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
    <motion.nav
      className='absolute left-0 w-full h-screen bg-[#111] top-0 '
      initial={{
        x: 50,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}>
      <ul className='flex flex-col items-center h-full justify-evenly'>
        {navList.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className='text-2xl text-[#ccc]'>
            <Link to={item.path}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

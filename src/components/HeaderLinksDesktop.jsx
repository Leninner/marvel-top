import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeaderLinksDesktop = () => {
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
      className='hidden w-1/2 pr-10 md:block'
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
  );
};

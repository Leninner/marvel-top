import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { getHeroesInfo } from '../utils/getHeroesInfo';

function App() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    getHeroesInfo();
  }, []);

  return (
    <div className='App'>
      <motion.h1 initial='hidden' animate='visible' variants={variants}>
        Leninner
      </motion.h1>
    </div>
  );
}

export default App;

import { motion } from 'framer-motion';
import { useFetchInitialData } from './Hooks/useFetchInitialData';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { MainView } from './containers/MainView';

function MarvelApp() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { information } = useFetchInitialData({ limit: 20, offset: 600 });
  const { data } = information;

  console.log(information);

  return (
    <div className={isDark ? 'dark' : null}>
      <MainView />

      <button onClick={toggleTheme}>Toggle theme</button>

      <div>
        {data.map((value) => {
          return (
            <motion.div
              key={value.id}
              initial='hidden'
              animate='visible'
              variants={variants}
              className='dark:bg-black m-5 dark:text-white'>
              <h3>{value.name}</h3>
              {/* Here I need the size of the images: https://developer.marvel.com/documentation/images */}
              <img src={`${value.thumbnail.path + '.' + value.thumbnail.extension}`} alt='' />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default MarvelApp;

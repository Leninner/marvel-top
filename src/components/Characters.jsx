import { motion } from 'framer-motion';
import { useFetchInitialData } from '../Hooks/useFetchInitialData';

export const Characters = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const { information } = useFetchInitialData({ limit: 20, offset: 600 });
  const { data } = information;

  console.log(information);

  return (
    <div>
      {data.map((value) => {
        return (
          <motion.div
            key={value.id}
            initial='hidden'
            animate='visible'
            variants={variants}
            className='m-5 dark:bg-black dark:text-white'>
            <h3>{value.name}</h3>
            {/* Here I need the size of the images: https://developer.marvel.com/documentation/images */}
            <img src={`${value.thumbnail.path + '.' + value.thumbnail.extension}`} alt='' />
          </motion.div>
        );
      })}
    </div>
  );
};

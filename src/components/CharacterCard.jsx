import { useState } from 'react';
import { motion } from 'framer-motion';

export const CharacterCard = ({ id, thumbnail: { path, extension }, name }) => {
  const [isHover, setIsHover] = useState(false);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      key={id}
      initial='hidden'
      animate='visible'
      variants={variants}
      className='md:m-5 lg:w-[400px] h-[550px] lg:h-[450px] cursor-pointer w-11/12 mb-5 relative'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {/* Here I need the size of the images: https://developer.marvel.com/documentation/images */}

      <div className='w-full h-full overflow-hidden'>
        <motion.img
          src={`${path + '.' + extension}`}
          className={`object-cover w-full h-full`}
          animate={
            isHover
              ? {
                  scale: 1.8,
                }
              : { scale: 1 }
          }
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            duration: 0.5,
          }}
        />
      </div>
      {isHover && (
        <motion.div
          className='absolute top-0 w-full h-full bg-transparent bg-gradient-to-t from-black to-transparent'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            duration: 0.5,
          }}
        />
      )}
    </motion.div>
  );
};

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
      className='md:m-5 lg:w-[400px] h-[550px] lg:h-[450px] cursor-pointer w-11/12 mb-5 relative overflow-hidden '
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className='lg:w-[385px] lg:h-[435px] w-[95.97%] h-[95.97%] border border-[#ffffff60] absolute center z-10 top-0 left-0 right-0 bottom-0 m-auto' />
      {/* Here I need the size of the images: https://developer.marvel.com/documentation/images */}

      <div className='w-full h-full overflow-hidden'>
        <motion.img
          src={`${path + '.' + extension}`}
          className={`object-cover w-full h-full `}
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

      {/* Div para oscurecer la imagen */}
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

      {/* Div para hacer un efecto cool */}

      <motion.div
        className='absolute z-20 w-40 h-20 bg-black -top-10 -right-20'
        initial={{ rotate: 45 }}
        animate={
          isHover
            ? {
                x: 100,
                y: -100,
              }
            : {
                x: 0,
                y: 0,
              }
        }
        transition={
          isHover && {
            type: 'spring',
            stiffness: 120,
            damping: 20,
            duration: 0.5,
          }
        }
      />
    </motion.div>
  );
};

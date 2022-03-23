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
            duration: 0.5,
          }}
        />
      </div>

      {isHover && (
        <>
          {/* Div para mostrar un marco en la imagen */}

          <motion.div
            className='lg:w-[385px] lg:h-[435px] w-[96%] h-[96%] border border-[#ffffff] absolute center z-10 top-0 left-0 right-0 bottom-0 m-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          />

          {/* Div para oscurecer la imagen */}

          <motion.div
            className='absolute top-0 left-0 w-full h-full bg-black'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 0.5,
            }}
          />
        </>
      )}

      {/* Div para colocar un cuadro rotado 45 grados en la esquina superior derecha */}

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
        transition={{
          duration: 0.5,
        }}
      />
    </motion.div>
  );
};

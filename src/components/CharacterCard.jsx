import { useState } from 'react';
import { motion } from 'framer-motion';
import { HoverThings } from './HoverThings';
import { ModalInfoPortal } from './ModalInfo';

export const CharacterCard = ({ id, thumbnail: { path, extension }, name }) => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleOpen = () => {
    setIsHover(false);
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      key={id}
      initial='hidden'
      animate='visible'
      variants={variants}
      className='md:m-5 lg:w-[250px] h-[400px] lg:h-[300px] cursor-default w-11/12 mb-5 relative overflow-hidden rounded-lg'
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
                  scale: 1.45,
                }
              : { scale: 1 }
          }
          transition={{
            duration: 0.3,
          }}
        />
      </div>

      <motion.div
        className='absolute z-20 w-10 h-10 bg-black -top-5 -right-5'
        initial={{ rotate: 45 }}
        animate={
          isHover
            ? {
                x: 20,
                y: -20,
              }
            : {
                x: 0,
                y: 0,
              }
        }
        transition={{
          duration: 0.3,
        }}
      />

      {isHover && <HoverThings name={name} handleOpen={handleOpen} />}
      {isOpen && <ModalInfoPortal handleOpen={handleOpen} />}
    </motion.div>
  );
};

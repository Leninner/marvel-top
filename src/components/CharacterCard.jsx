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
      className='md:m-5 md:w-[232px] h-[312.84px] cursor-pointer w-11/12 mb-5'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {/* Here I need the size of the images: https://developer.marvel.com/documentation/images */}

      <div className='h-[262px] w-full overflow-hidden'>
        <motion.img
          src={`${path + '.' + extension}`}
          className='object-cover w-full h-full'
          whileHover={isHover ? { scale: 1.07 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        className={`w-full h-[50.84px] p-2 bg-[#061c25] flex items-center text-[20px] text-white ${
          isHover ? 'pl-7' : 'pl-5'
        } duration-300`}>
        {name}
      </motion.div>
    </motion.div>
  );
};

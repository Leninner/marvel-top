import { motion } from 'framer-motion';
import { MdDescription, MdVideoLibrary, MdLibraryBooks } from 'react-icons/md';
import { BiLibrary } from 'react-icons/bi';

export const HoverThings = ({ name }) => {
  return (
    <>
      <motion.div
        className=' w-[97%] h-[97%] border border-[#ccc5b9] absolute center z-10 top-0 left-0 right-0 bottom-0 m-auto rounded-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
        }}>
        <div className='relative w-full h-full '>
          <motion.span
            className='absolute z-40 w-full px-3 mx-auto overflow-hidden text-xl font-semibold text-center text-white whitespace-nowrap top-1 text-ellipsis'
            initial={{ opacity: 0, y: -300 }}
            animate={{
              y: 0,
              opacity: 1,
            }}>
            {name}
          </motion.span>

          <motion.div
            className='absolute bottom-0 right-0 flex flex-col justify-between mb-2 h-2/4 left-2'
            initial={{
              y: '100%',
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}>
            <MdDescription color='white' size='20' className='cursor-pointer' />
            <BiLibrary color='white' size='20' className='cursor-pointer ' />
            <MdVideoLibrary color='white' size='20' className='cursor-pointer' />
            <MdLibraryBooks color='white' size='20' className='cursor-pointer' />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className='absolute top-0 left-0 w-full h-full bg-[black]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{
          duration: 0.3,
        }}
      />
    </>
  );
};

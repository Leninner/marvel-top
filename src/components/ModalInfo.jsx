import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { MdDescription, MdVideoLibrary, MdLibraryBooks } from 'react-icons/md';

const Modalnfo = ({ handleOpen }) => {
  console.log('Me llamaron');

  const closePopUp = (e) => {
    if (e.target === e.currentTarget) {
      handleOpen();
    }
  };

  return (
    <div className='fixed top-0 bottom-0 z-50 w-full h-full'>
      <div className='absolute top-0 z-10 w-full h-full bg-black opacity-75' />

      <div className='absolute z-50 flex items-center justify-center w-full h-full ' onClick={closePopUp}>
        <div className='relative flex justify-end w-2/4 bg-white rounded-lg h-3/4'>
          <AiOutlineClose
            className='absolute top-0 right-0 m-2 cursor-pointer'
            color='black'
            onClick={closePopUp}
            size='25'
          />

          <div className='h-full overflow-hidden bg-red-700 rounded-full w-[75vh] absolute -left-1/3'>
            <img src='https://fondosmil.com/fondo/48506.jpg' alt='' className='object-cover w-full h-full' />
          </div>

          <div className='w-2/3 h-full p-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam illum hic voluptatum doloremque numquam magni
            non alias. Consequatur, commodi necessitatibus magni tempore impedit dolor eligendi, soluta dignissimos
            doloribus earum reprehenderit.
          </div>
        </div>
      </div>
    </div>
  );
};

export const ModalInfoPortal = ({ handleOpen }) =>
  createPortal(<Modalnfo handleOpen={handleOpen} />, document.getElementById('modal'));

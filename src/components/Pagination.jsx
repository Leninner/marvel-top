export const Pagination = ({ onPreviousPage, onNextPage }) => {
  return (
    <div className='flex justify-center w-full my-10'>
      <button
        className='px-4 py-2 mx-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        onClick={onPreviousPage}>
        Previous Page
      </button>

      <button
        className='px-4 py-2 mx-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        onClick={onNextPage}>
        Next Page
      </button>
    </div>
  );
};

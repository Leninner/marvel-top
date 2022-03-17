import { motion } from 'framer-motion';
import { useFetchInitialData } from '../Hooks/useFetchInitialData';

function App() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const { information } = useFetchInitialData();

  console.log(information);
  const { data } = information;

  return (
    <div className='App'>
      <motion.h1 initial='hidden' animate='visible' variants={variants}>
        {data.map((value) => {
          return (
            <div key={value.id}>
              <h3>{value.name}</h3>
              {/* Here I need the size of the images: https://developer.marvel.com/documentation/images */}
              <img src={`${value.thumbnail.path}/portrait_uncanny.jpg`} alt='' />
            </div>
          );
        })}
      </motion.h1>
    </div>
  );
}

export default App;

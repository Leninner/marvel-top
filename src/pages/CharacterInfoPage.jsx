import { useParams } from 'react-router-dom';

export const CharacterInfoPage = () => {
  const { id } = useParams();
  // Necesito un método para hacer el fetch de datos de un personaje en específico. Para esto uso el ID

  return <div className='w-40 h-40 bg-white'></div>;
};

import scss from './CardList.module.scss';
import CarCard from 'components/CarCard/CarCard';

const CarsList = ({ cars }) => {
  return (
    <>
      <ul className={scss.cardList}>
        {cars?.map(car => (
          <CarCard key={car.id} data={car} />
        ))}
      </ul>
    </>
  );
};

export default CarsList;

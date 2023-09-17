import scss from './CardList.module.scss';
import CarCard from 'components/CarCard/CarCard';
import PropTypes from 'prop-types';

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

CarsList.propTypes = {
  cars: PropTypes.array,
};

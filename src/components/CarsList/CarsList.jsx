import { fetchCars } from 'Api/api';
import scss from './CardList.module.scss';
import { useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';
import Loader from 'components/Loader/Loader';

const CarsList = () => {
  const [cars, setCars] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const catalog = await fetchCars(page);

        if (page > 1) {
          setCars(prevCars => [...prevCars, ...catalog]);
        } else {
          setCars(catalog);
        }
      } catch (error) {
        alert(error.message); // добавити нофікашку
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  console.log(cars);
  const handleLoadMorePicture = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      {isLoading && <Loader />}
      <section>
        <ul className={scss.cardList}>
          {cars?.length > 0 &&
            cars.map(car => <CarCard key={car.id} data={car} />)}
        </ul>
        {!isLoading && (
          <button
            type="button"
            onClick={handleLoadMorePicture}
            className={scss.cardList_loadBtn}
          >
            Load more
          </button>
        )}
      </section>
    </>
  );
};

export default CarsList;

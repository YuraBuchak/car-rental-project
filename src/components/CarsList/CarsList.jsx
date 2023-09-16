import scss from './CardList.module.scss';
import { useEffect, useState } from 'react';
import CarCard from 'components/CarCard/CarCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, selectIsLoading } from 'redux/cars/selectors';
import Loader from 'components/Loader/Loader';
import { fetchCarsPage } from 'Api/api';
// import { fetchAllCarsThunk } from 'redux/cars/carsOperation';
import { parseToFavorites } from 'redux/cars/favoriteSlice';

const CarsList = ({ type }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  // const cars = useSelector(selectCars);
  // const error = useSelector(selectError);
  const [cars, setCars] = useState();
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (type === 'catalog') {
      (async () => {
        try {
          const catalog = await fetchCarsPage(page);
          if (page > 1) {
            setCars(prevCars => [...prevCars, ...catalog]);
          } else {
            setCars(catalog);
          }
        } catch (error) {
          alert('Error fetching catalog:', error.message); // добавити нофікашку
        }
      })();
    }
  }, [page, type]);

  // useEffect(() => {
  //   dispatch(fetchAllCarsThunk());
  // }, [dispatch]);

  const handleLoadMorePicture = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (type === 'fav') {
      const currentFavorites =
        JSON.parse(localStorage.getItem('favorites')) || [];
      dispatch(parseToFavorites(currentFavorites));
    }
  }, [dispatch, type]);

  return (
    <>
      {isLoading && <Loader />}
      {type === 'catalog' && (
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
      )}

      {type === 'fav' && (
        <section>
          <ul className={scss.cardList}>
            {favorites?.length > 0 &&
              favorites.map(car => <CarCard key={car.id} data={car} />)}
          </ul>
        </section>
      )}
    </>
  );
};

export default CarsList;

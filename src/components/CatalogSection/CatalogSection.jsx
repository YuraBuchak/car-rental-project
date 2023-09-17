import scss from '../CarsList/CardList.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading } from 'redux/cars/selectors';
import Loader from 'components/Loader/Loader';
import { fetchCarsPage } from 'Api/api';
import CarsList from 'components/CarsList/CarsList';
// import { fetchAllCarsThunk } from 'redux/cars/carsOperation';

const CatalogSection = () => {
  //   const dispatch = useDispatch();
  // const cars = useSelector(selectCars);
  // const error = useSelector(selectError);
  const [cars, setCars] = useState();
  const [page, setPage] = useState(1);
  //   const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
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
  }, [page]);

  // useEffect(() => {
  //   dispatch(fetchAllCarsThunk());
  // }, [dispatch]);

  const handleLoadMorePicture = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <section>
        <CarsList cars={cars} />
        <button
          type="button"
          onClick={handleLoadMorePicture}
          className={scss.cardList_loadBtn}
        >
          Load more
        </button>
      </section>
    </>
  );
};

export default CatalogSection;

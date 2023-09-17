import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsPage } from 'Api/api';
import CarsList from 'components/CarsList/CarsList';
import { fetchAllCarsThunk } from 'redux/cars/carsOperation';
import { selectCars } from 'redux/cars/selectors';
import scss from '../../pages/Page.module.scss';

const CatalogSection = () => {
  const [cars, setCars] = useState();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const catalog = useSelector(selectCars);

  const totalPages = Math.ceil(catalog.length / 8);

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

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  const handleLoadMorePicture = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <section className={scss.section}>
        <CarsList cars={cars} />
        {page < totalPages && (
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

export default CatalogSection;

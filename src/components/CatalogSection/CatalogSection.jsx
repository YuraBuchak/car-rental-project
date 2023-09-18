import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsPage } from 'Api/api';
import CarsList from 'components/CarsList/CarsList';
import { fetchAllCarsThunk } from 'redux/cars/carsOperation';
import { selectCars } from 'redux/cars/selectors';
import scss from '../../pages/Page.module.scss';
import Filter from 'components/Filter/Filter';
import filterCars from 'components/Filter/filterCars';

const CatalogSection = () => {
  const [cars, setCars] = useState();
  const [page, setPage] = useState(1);

  const [filteredCars, setFilteredCars] = useState([]);
  const [filterParams, setFilterParams] = useState(null);
  const catalogCars = useSelector(selectCars);
  const totalPages = Math.ceil(catalogCars.length / 8);
  const dispatch = useDispatch();

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
        alert('Error fetching catalog:', error.message);
      }
    })();
  }, [page]);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (catalogCars && filterParams) {
      const filtered = filterCars(filterParams, catalogCars);
      setFilteredCars(filtered);
    }
  }, [catalogCars, filterParams]);

  const handleLoadMorePicture = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilter = e => {
    setFilterParams(e);
  };
  console.log(filteredCars);

  return (
    <>
      <section className={scss.section}>
        <Filter onFilter={handleFilter} />
      </section>
      <section className={scss.section}>
        <CarsList
          cars={filteredCars.length >= 1 && filterParams ? filteredCars : cars}
        />
        {page < totalPages && filteredCars.length === 0 && !filterParams && (
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

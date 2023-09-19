import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarsList from 'components/CarsList/CarsList';
import {
  fetchAllCarsThunk,
  fetchCarsPaginationThunk,
} from 'redux/cars/carsOperation';
import {
  selectCars,
  selectCarsPage,
  selectIsLoading,
} from 'redux/cars/selectors';
import scss from '../../pages/Page.module.scss';
import Filter from 'components/Filter/Filter';
import filterCars from 'components/Filter/filterCars';
import Paginator from 'components/Paginator/Paginator';
import Loader from 'components/Loader/Loader';
import NoResults from './NoResults/NoResults';

const CatalogSection = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarsPage);
  const isLoading = useSelector(selectIsLoading);
  const catalogCars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterParams, setFilterParams] = useState(null);

  const totalPages = Math.ceil(catalogCars.length / 8);

  useEffect(() => {
    dispatch(fetchCarsPaginationThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (catalogCars && filterParams) {
      const filtered = filterCars(filterParams, catalogCars);
      setFilteredCars(filtered);
    }
  }, [catalogCars, filterParams]);

  const handleFilter = e => {
    setFilterParams(e);
  };

  const handleBack = () => {
    setFilterParams(null);
    setFilteredCars([]);
  };

  return (
    <>
      <section className={scss.section}>
        <Filter onFilter={handleFilter} />
      </section>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {filteredCars.length >= 1 && filterParams && (
            <section className={scss.section}>
              <CarsList cars={filteredCars} />
            </section>
          )}
          {filteredCars.length === 0 && filterParams && (
            <section className={scss.section}>
              <NoResults onClick={handleBack} />
            </section>
          )}

          {filteredCars.length === 0 && !filterParams && (
            <div>
              <section className={scss.section}>
                <CarsList cars={cars} />
              </section>
              <section className={scss.section}>
                <Paginator
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </section>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CatalogSection;

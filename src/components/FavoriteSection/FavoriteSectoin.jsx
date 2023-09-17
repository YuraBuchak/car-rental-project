import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/selectors';
import { parseToFavorites } from 'redux/cars/favoriteSlice';
import CarsList from 'components/CarsList/CarsList';
import EmptyPage from 'components/EmptyPage/EmptyPage';
import scss from '../../pages/Page.module.scss';

const FavoriteSection = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    const currentFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(parseToFavorites(currentFavorites));
  }, [dispatch]);

  return (
    <>
      <section className={scss.section}>
        {favorites.length > 0 ? <CarsList cars={favorites} /> : <EmptyPage />}
      </section>
    </>
  );
};

export default FavoriteSection;

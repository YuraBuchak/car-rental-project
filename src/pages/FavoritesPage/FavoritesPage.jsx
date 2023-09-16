import CarsList from 'components/CarsList/CarsList';
import scss from '../Page.module.scss';

const FavoritesPage = () => {
  return (
    <div className={scss.container}>
      <CarsList type="fav" />
    </div>
  );
};

export default FavoritesPage;

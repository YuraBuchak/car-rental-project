import scss from '../Page.module.scss';
import FavoriteSection from 'components/FavoriteSection/FavoriteSectoin';

const FavoritesPage = () => {
  return (
    <div className={scss.container}>
      <FavoriteSection />
    </div>
  );
};

export default FavoritesPage;

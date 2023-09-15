import CarsList from 'components/CarsList/CarsList';
import scss from '../Page.module.scss';

const CatalogPage = () => {
  return (
    <div className={scss.container}>
      {/* <h2 className={scss.pageTitle}>Cataloge</h2> */}
      <CarsList />
    </div>
  );
};

export default CatalogPage;

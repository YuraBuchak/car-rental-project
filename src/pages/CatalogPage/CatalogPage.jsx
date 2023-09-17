import scss from '../Page.module.scss';
import CatalogSection from 'components/CatalogSection/CatalogSection';

const CatalogPage = () => {
  return (
    <div className={scss.container}>
      <CatalogSection />
    </div>
  );
};

export default CatalogPage;

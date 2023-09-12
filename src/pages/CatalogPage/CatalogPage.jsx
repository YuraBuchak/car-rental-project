import scss from '../Page.module.scss';

const CatalogPage = () => {
  return (
    <div className={scss.page}>
      <div className={scss.container}>
        <h2 className={scss.pageTitle}>Our cars.</h2>
      </div>
    </div>
  );
};

export default CatalogPage;

import scss from './NoResults.module.scss';

const NoResults = ({ onClick }) => {
  return (
    <div className={scss.container}>
      <p className={scss.text_result}>
        No one result for these search params...
      </p>
      <button type="button" onClick={onClick} className={scss.button_result}>
        Back
      </button>
    </div>
  );
};

export default NoResults;

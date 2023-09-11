import scss from './CarCard.module.scss';

const CarCard = () => {
  return (
    <li className={scss.carCard_item}>
      <div className={scss.carCard_imgWrapper}>
        <img className={scss.carCard_img} src="" alt="car" />
      </div>

      <div className={scss.carCard_infoWrapper}>
        <h2 className={scss.carCard_title}>Volvo</h2>
        <p className={scss.carCard_info}>Ingredients</p>
      </div>

      <button type="button" className={scss.carCard_button}>
        Learn more
      </button>
    </li>
  );
};

export default CarCard;

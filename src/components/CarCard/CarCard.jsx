import { useEffect, useState } from 'react';
import scss from './CarCard.module.scss';
import { FiHeart } from 'react-icons/fi';
import { CarModal } from 'components/CarModal/CarModal';
import placeholderImg from '../../pictures/placeholder.jpg';
import { useDispatch } from 'react-redux';
import { parseToFavorites } from 'redux/cars/favoriteSlice';

const CarCard = ({ data }) => {
  const {
    id,
    address,
    functionalities,
    img,
    make,
    mileage,
    model,
    rentalCompany,
    rentalPrice,
    type,
    year,
  } = data;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const handleClick = e => toggleModal();
  const splitAddress = address.split(',');

  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const currentFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = currentFavorites.find(car => car.id === id);
    setIsFavorite(isFavorite);
  }, [id]);

  const handleFavorites = () => {
    const currentFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];
    if (!isFavorite) {
      currentFavorites.push(data);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
      dispatch(parseToFavorites(currentFavorites));
      setIsFavorite(true);
    } else {
      const updatedFavorites = currentFavorites.filter(car => car.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      dispatch(parseToFavorites(updatedFavorites));
      setIsFavorite(false);
    }
  };

  return (
    <li className={scss.carCard_item}>
      <div className={scss.carCard_imgWrapper}>
        <img
          className={scss.carCard_img}
          src={img || placeholderImg}
          alt="car"
        />
        <button
          onClick={handleFavorites}
          type="button"
          className={scss.heart_button}
        >
          <FiHeart
            style={{
              fill: isFavorite ? '#3470ff' : 'transparent',
              stroke: 'white',
            }}
            size={20}
          />
        </button>
      </div>

      <div className={scss.carCard_infoWrapper}>
        <div className={scss.carCard_titleWrapper}>
          <h3 className={scss.carCard_title}>
            {make} <span className={scss.carCard_titleModel}>{model}</span>,
            <span className={scss.carCard_titleYear}>{year}</span>
          </h3>
          <p className={scss.carCard_title}>{rentalPrice}</p>
        </div>

        <ul className={scss.carCard_listInfo}>
          <li className={scss.carCard_itemInfo}>{splitAddress[2]}</li>
          <li className={scss.carCard_itemInfo}>{splitAddress[1]}</li>
          <li className={scss.carCard_itemInfo}>{rentalCompany}</li>
        </ul>
        <ul className={scss.carCard_listInfo}>
          <li className={scss.carCard_itemInfo}>{type}</li>
          <li className={scss.carCard_itemInfo}>{model}</li>
          <li className={scss.carCard_itemInfo}>{mileage}</li>
          <li className={scss.carCard_itemInfo}>{functionalities[0]}</li>
        </ul>
      </div>

      <button
        onClick={toggleModal}
        type="button"
        className={scss.carCard_button}
      >
        Learn more
      </button>

      {showModal && <CarModal data={data} onClick={handleClick} />}
    </li>
  );
};

export default CarCard;

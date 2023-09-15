import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import scss from './CarModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import placeholderImg from '../../pictures/placeholder.jpg';
// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const CarModal = ({ onClick, data }) => {
  const {
    id,
    accessories,
    address,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    img,
    make,
    mileage,
    model,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = data;

  const handleToggleModal = event => {
    const handleEventModal =
      event.currentTarget === event.target || event.code === 'Escape';

    if (handleEventModal) {
      onClick();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleToggleModal);
    window.addEventListener('click', handleToggleModal);
    return () => {
      window.removeEventListener('keydown', handleToggleModal);
      window.removeEventListener('click', handleToggleModal);
    };
  });

  const services = [...accessories, ...functionalities];
  const splitAddress = address.split(',');
  const splitRentalConditions = rentalConditions.split('\n');
  const [text, age] = splitRentalConditions[0].split(':');

  return createPortal(
    <div onClick={handleToggleModal} className={scss.overlay}>
      <div className={scss.modal}>
        <div className={scss.modal_imgWrapper}>
          <img
            className={scss.modal_img}
            src={img || placeholderImg}
            alt="car"
          />
        </div>

        <div className={scss.modal_infoWrapper}>
          <div>
            <h3 className={scss.modal_title}>
              {make} <span className={scss.modal_titleModel}>{model}</span>,
              <span className={scss.modal_titleYear}>{year}</span>
            </h3>

            <ul className={scss.modal_listG}>
              <li className={scss.modal_listItemG}>{splitAddress[2]}</li>
              <li className={scss.modal_listItemG}>{splitAddress[1]}</li>
              <li className={scss.modal_listItemG}>Id: {id}</li>
              <li className={scss.modal_listItemG}>Year: {year}</li>
              <li className={scss.modal_listItemG}>Type: {type}</li>
            </ul>

            <ul className={scss.modal_listG}>
              <li className={scss.modal_listItemG}>
                Fuel Consumption: {fuelConsumption}
              </li>
              <li className={scss.modal_listItemG}>
                Engine Size: {engineSize}
              </li>
            </ul>
            <p className={scss.modal_description}>{description}</p>
          </div>

          <div>
            <p className={scss.modal_subTitle}>
              Accessories and functionalities:
            </p>
            <ul className={scss.modal_listG}>
              {services.map((service, index) => (
                <li key={index} className={scss.modal_listItemG}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={scss.modal_subTitle}>Rental Conditions:</p>
            <ul className={scss.modal_listCondition}>
              <li className={scss.modal_itemCondition}>
                {text}:<span className={scss.modal_titleModel}>{age}</span>
              </li>
              <li className={scss.modal_itemCondition}>
                {splitRentalConditions[1]}
              </li>
              <li className={scss.modal_itemCondition}>
                {splitRentalConditions[2]}
              </li>
              <li className={scss.modal_itemCondition}>
                Mileage:
                <span className={scss.modal_titleModel}>
                  {mileage.toLocaleString('en-US')}
                </span>
              </li>
              <li className={scss.modal_itemCondition}>
                RentalPrice:
                <span className={scss.modal_titleModel}>{rentalPrice}</span>
              </li>
            </ul>
          </div>

          <a href="tel:+380730000000" className={scss.modal_rentalBtn}>
            Rental car
          </a>
        </div>

        <button
          onClick={onClick}
          type="button"
          className={scss.modal_cancelBtn}
        >
          <RxCross2 size={24} />
        </button>
      </div>
    </div>,
    modalRoot
  );
};

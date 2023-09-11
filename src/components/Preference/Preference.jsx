import scss from './Preference.module.scss';
import { GiReceiveMoney } from 'react-icons/gi';
import { TbZoomMoney } from 'react-icons/tb';
import { BsCalendarCheck } from 'react-icons/bs';

const Preference = () => {
  return (
    <section className={scss.container}>
      <h2 className={scss.preferenceTitle}>Why rent a car with us?</h2>
      <ul className={scss.preferenceList}>
        <li className={scss.preferenceItem}>
          <GiReceiveMoney size={80} />
          <h3 className={scss.preferenceItem_title}>
            Save money for your trip
          </h3>
          <p className={scss.preferenceItem_description}>
            We have the best rates. No mileage limits. So you can have more
            money to enjoy your trip.
          </p>
        </li>
        <li className={scss.preferenceItem}>
          <TbZoomMoney size={80} />
          <h3 className={scss.preferenceItem_title}>No hidden fees</h3>
          <p className={scss.preferenceItem_description}>
            Know exactly what you’re paying.
          </p>
        </li>
        <li className={scss.preferenceItem}>
          <BsCalendarCheck size={80} />
          <h3 className={scss.preferenceItem_title}>Flexible rentals</h3>
          <p className={scss.preferenceItem_description}>
            Cancel or change most bookings for free up to 48 hours before
            pick-up.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Preference;

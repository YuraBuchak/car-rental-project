import Preference from 'components/Preference/Preference';
import scss from '../Page.module.scss';
import AboutUs from 'components/AboutUs/AboutUs';

const HomePage = () => {
  return (
    <>
      <section className={scss.hero}>
        <h2 className={scss.heroSupTitle}>Our offers are your best choice</h2>
        <h1 className={scss.heroTitle}>RENT THE CAR.</h1>
      </section>
      <Preference />
      <AboutUs />
    </>
  );
};

export default HomePage;

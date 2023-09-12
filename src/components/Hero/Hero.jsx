import { NavLink } from 'react-router-dom';
import scss from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <section className={scss.hero}>
        <h2 className={scss.heroSupTitle}>Our offers are your best choice</h2>
        <h1 className={scss.heroTitle}>RENT THE CAR.</h1>
        <NavLink to="/catalog" className={scss.heroBtn}>
          Let’s try it!
        </NavLink>
      </section>
    </>
  );
};

export default Hero;

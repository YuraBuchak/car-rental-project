import { useNavigate } from 'react-router-dom';
import scss from './Hero.module.scss';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={scss.hero}>
        <h2 className={scss.heroSupTitle}>Our offers are your best choice</h2>
        <h1 className={scss.heroTitle}>RENT THE CAR.</h1>
        <button onClick={() => navigate('/catalog')} className={scss.heroBtn}>
          Let’s try it!
        </button>
      </section>
    </>
  );
};

export default Hero;

import { Navigation } from 'components/Navigation/Navigation';
import scss from './Header.module.scss';
import logo from '../../pictures/logo3.png';

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.header_wrapper}>
        <div className={scss.logo_wrapper}>
          <img
            src={logo}
            className={scss.animate__customSlideInLeft}
            alt="logo renta car"
            width="110"
            height="auto"
          />
          <p className={`${scss.text} ${scss.animate__customshakeX}`}>
            Rent<span className={scss.text_span}>ACar</span>
          </p>
        </div>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;

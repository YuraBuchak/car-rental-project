import { Navigation } from 'components/Navigation/Navigation';
import scss from './Header.module.scss';
import logo from '../../pictures/logo3.png';

const Header = () => {
  return (
    <header className={scss.header}>
      <img src={logo} alt="logo renta car" width="110" height="auto" />
      <Navigation />
    </header>
  );
};

export default Header;

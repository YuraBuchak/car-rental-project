import { Navigation } from 'components/Navigation/Navigation';
import scss from './Header.module.scss';

const Header = () => {
  return (
    <header className={scss.header}>
      <Navigation />
    </header>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';
import scss from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={scss.navigationContainer}>
      <NavLink to="/" className={scss.navigationLink}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={scss.navigationLink}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={scss.navigationLink}>
        Favorites
      </NavLink>
    </nav>
  );
};

import { NavLink } from 'react-router-dom';
import scss from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={scss.NavigationContainer}>
      <NavLink to="/" className={scss.NavigationLink}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={scss.NavigationLink}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={scss.NavigationLink}>
        Favorites
      </NavLink>
    </nav>
  );
};

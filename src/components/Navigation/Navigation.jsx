import { NavLink } from 'react-router-dom';
import scss from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav>
      <ul className={scss.navigationContainer}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? scss.active : scss.navigationLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? scss.active : scss.navigationLink
            }
          >
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? scss.active : scss.navigationLink
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

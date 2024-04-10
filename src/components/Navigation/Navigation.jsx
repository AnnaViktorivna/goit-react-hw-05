import { NavLink } from "react-router-dom";

import clsx from "clsx";
import css from "./Navigation.module.css";

const getActiveClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={getActiveClassName} to='/'>
        Home
      </NavLink>
      <NavLink className={getActiveClassName} to='/movies'>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

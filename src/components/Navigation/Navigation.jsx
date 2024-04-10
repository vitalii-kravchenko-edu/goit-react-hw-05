import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

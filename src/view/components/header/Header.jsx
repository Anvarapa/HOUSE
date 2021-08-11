import css from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={css.header}>
      <a href="#">
        <img src="./img/logo.svg" alt="" />
      </a>
      <ul className={css.ul}>
        <li>
        <NavLink exact to="/">
            For sale
          </NavLink>
        </li>
        <li>
        <a href="#">Information</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <NavLink exact to="/signin">
            Sign in
          </NavLink>
        </li>
      </ul>
      <div className={css.button_log}>
        <button className={css.button}>Вход </button>
        <img src="./img/man_logo.svg" alt="" />
      </div>
    </header>
  );
};

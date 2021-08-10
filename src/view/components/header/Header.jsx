import css from './header.module.css';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={css.header}>
      <img src="./img/logo.svg" alt="" />
      <ul className={css.ul}>
        <li>
          <a href="#">For sale</a>
        </li>
        <li>
          <a href="#">Information</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">Log in</a>
        </li>
      </ul>
      <div className={css.button_log}>
        <button className={css.button}>Вход </button>
        <img src="./img/man_logo.svg" alt="" />
      </div>
    </header>
  );
};

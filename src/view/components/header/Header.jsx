import css from './header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={css.container}>
            <img src='./img/logo.svg' alt="" />
            <ul>
                <li><a href="#">For sale</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Log in</a></li>
            </ul>
            <div><button>Вход </button></div>
            
        </div>
    )
}
  
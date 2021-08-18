import css from "./../forSale.module.css";
import { Link } from "react-router-dom";
export const Block3 = () => {
  return (
    <div className="container">
      <div className={css.block3}>
        <div className={css.left}>
          <h1 className={css.left_h1}>Search Your Dream House On The Map</h1>
          <p className={css.left_p}>
            Find the house you are looking for easily according to location
            information.
          </p>
          <Link  className={css.left_button} exact to="/onmap">
            ON MAP
          </Link>
        </div>
        <img src="./img/block3_right.jpg" alt="" />
      </div>
    </div>
  );
};

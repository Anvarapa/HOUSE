import css from "./../forSale.module.css";
export const Block5 = () => {
  return (
    <div className="container">
        <div className={css.block5}>
      <div className={css.block5_l_r}>
        <div className={css.b5_left}>
          <h1 className={css.left_h1}>Search Your Dream House On The Map</h1>
          <p className={css.left_p}>
            Find the house you are looking for easily according to location
            information.
          </p>
          <button className={css.border_button}>View Project</button>
        </div>
        <div className={css.block5_img}>
        <img src="./img/block5_right.jpg" alt="" />
        </div>
      </div>

      <div className={css.block5_l_r}>
        <div className={css.b5_left}>
          <h1 className={css.left_h1}>Search Your Dream House On The Map</h1>
          <p className={css.left_p}>
            Find the house you are looking for easily according to location
            information.
          </p>
          <button className={css.border_button}>View Project</button>
        </div>
        <div className={css.block5_img}>
        <img src="./img/block5_right.jpg" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

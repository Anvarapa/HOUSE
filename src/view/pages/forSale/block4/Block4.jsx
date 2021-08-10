import css from "./../forSale.module.css";
export const Block4 = () => {
  return (
    <div>
      <div className="container">
        <h1 className={css.all_blocks_h1}>Featured Projects</h1>
        <div className={css.block4}>
          <div className={css.left}>
            <h1 className={css.left_h1}>Search Your Dream House On The Map</h1>
            <p className={css.left_p}>
              Find the house you are looking for easily according to location
              information.
            </p>
            <button className={css.border_button}>View Project</button>
          </div>
          <img src="./img/block4_right.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

import css from "./../forSale.module.css";
import lopa from '../../../assets/img/lopa.svg'
export const Block1 = () => {
    return (
        <div className={css.block1}>
        <h1>
          Your dream <br/> house is here
        </h1>
        <div className={css.search}>
        <input className={css.input} type="text" />
        <img src={lopa} alt="" />
        </div>
       
      </div>
    )
}

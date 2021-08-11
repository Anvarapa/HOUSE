import css from "./forSale.module.css";
import { Block1 } from "./block1/Block1";
import { Block2 } from "./block2/Block2";
import { Block3 } from "./block3/Block3";
import { Block4 } from "./block4/Block4";
import { Block5 } from "./block5/Block5";
import { Footer } from "./footer/Footer";
import { LearnMore } from "../learnmor/LearnMore";

export const ForSale = () => {
  return (
    <div>
      <Block1 />
      <div className='container'>
      <h1 className={css.all_blocks_h1}>Featured Projects</h1>
      </div>
      <div className={`${css.block2} container`}>
        <Block2 />
        <Block2 />
        <Block2 />
        <Block2 />
        <Block2 />
        <Block2 />
        <Block2 />
        <Block2 />
      </div>
      <Block3 />
      <Block4 />
      <Block5 />
      <Footer/>
    </div>
  );
};

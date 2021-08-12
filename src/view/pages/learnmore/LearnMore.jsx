
import Slider from './slider/Slider'
import css from './learnmore.module.css'
import HomeInfo from './homeinfo/HomeInfo'
import Explanation from './explanation/Explanation'
import Interior from './interior/Interior'
import Learnmoremap from './learnmoremap/Learnmoremap'



export function LearnMore () {
    return (
        <div className="container">
            <div className={css.title}>
                <p className={css.title__text}>Single Person House</p>
                <div className={css.block}>
                <div className={css.map__info}>
                    <img src="./img/Mapicon.png" alt="" />
                    <p className={css.london}>London, Dean St.</p>
                </div>
                <p className={css.price}>125 $</p>
                </div>
            </div>
        <Slider />
        <HomeInfo />
        <Explanation />
        <Interior />
        <Learnmoremap />
        </div>
    )
}

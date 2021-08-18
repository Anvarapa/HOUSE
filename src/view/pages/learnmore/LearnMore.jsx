import { useEffect, useState } from "react";
import css from './learnmore.module.css'
import { useParams } from "react-router-dom"
import Slider from './slider/Slider'
import HomeInfo from './homeinfo/HomeInfo'
import Explanation from './explanation/Explanation'
import Interior from './interior/Interior'
import {Learnmoremap} from "./learnmoremap/Learnmoremap";


function LearnMore () {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(`https://60f1203338ecdf0017b0fa4e.mockapi.io/teamHouse/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);

    return (
      <div className="container">
      <div className={css.title}>
        <p className={css.title__text}>{data.name}</p>
        <div className={css.block}>
          <div className={css.map__info}>
            <img src="/img/Mapicon.png" alt="" />
            <p className={css.london}>London, Dean St.</p>
          </div>
          <p className={css.price}>{data.price}$</p>
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

export default LearnMore

    

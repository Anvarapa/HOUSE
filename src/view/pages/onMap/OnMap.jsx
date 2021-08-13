import React from "react";
import { NavLink } from "react-router-dom";
import css from "./onMap.module.css";
import { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Block2 } from "../forSale/block2/Block2";

export const OnMap = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://60f1203338ecdf0017b0fa4e.mockapi.io/teamHouse")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="container">
      <div className={css.mapCard}>
        <div className={css.cards}>
          {data.map((item) => (
            <Block2 key={item.id} {...item} />
          ))}
        </div>
        <div className={css.map}>
          <YMaps>
            <Map
              height={"100%"}
              width={"100%"}
              defaultState={{
                center: [42.87779119942956, 74.59216450654115],
                zoom: 7,
              }}
            >
              <Placemark geometry={[42.87596433183062, 74.59381388633115]} />
              {data.map((item) => (
                <Placemark geometry={[item.lng, item.ltd]} />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

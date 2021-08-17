import React from "react";
import css from "./onMap.module.css";
import {useEffect, useState} from "react";
import {Block2} from "../forSale/block2/Block2";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

export const OnMap = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://60f1203338ecdf0017b0fa4e.mockapi.io/teamHouse")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const [viewport, setViewport] = React.useState({
        latitude: 42.87681595201458,
        longitude: 74.58320174047928,
        zoom: 10,
    });

    const [selectedMap, setSelectedMap] = useState(null)
    return (
        <div className="container">
            <div className={css.mapCard}>
                <div className={css.cards}>
                    <div className={css.buttons}>
                        <button className={css.btn}>df</button>
                        <button className={css.btn}>df</button>
                        <button className={css.btn}>df</button>
                    </div>
                    {data.map((item) => (
                        <Block2 key={item.id} {...item} />
                    ))}
                </div>
                <div className={css.map}>
                    <ReactMapGL
                        {...viewport}
                        mapStyle="mapbox://styles/anvar1997/cksebp8mj8s4x17peh5cpg4pf"
                        mapboxApiAccessToken={"pk.eyJ1IjoiYW52YXIxOTk3IiwiYSI6ImNrc2VibnF3ZjBmYzMydW9mOGN5ZWt2NTUifQ.z8-kPZ7kriE7c1DXXn8paQ"}
                        width="100%"
                        height="100%"
                        onViewportChange={(viewport) => setViewport(viewport)}
                    >
                        {data.map((item) => (
                            <div>
                                <Marker longitude={Number(item.lng)} latitude={Number(item.ltd)}>
                                    {/*onClick={<Block2 key={item.id} image={item.image}*/}
                                    <button className={css.marker_button} onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedMap(item)
                                        console.log(item)
                                    }
                                    }>
                                        <img src="./img/man_logo.svg" alt=""/>
                                    </button>
                                </Marker>

                                {selectedMap===item?


                                    <Popup latitude={Number(selectedMap.ltd)} longitude={Number(selectedMap.lng)}>
                                        <div>
                                            <Block2 key={item.id} {...item} />
                                        </div>
                                    </Popup>
                                : false}
                            </div>
                        ))}

                    </ReactMapGL>

                </div>
            </div>
        </div>
    );
};




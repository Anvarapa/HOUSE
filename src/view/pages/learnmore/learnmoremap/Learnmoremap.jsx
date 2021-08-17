import React from "react";
import css from './learnmoremap.module.css'
import { useEffect, useState } from "react";

import ReactMapGL, {Marker} from 'react-map-gl';
import {Block2} from "../../forSale/block2/Block2";

export const Learnmoremap = () => {
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
        zoom: 8
    });
    return (
        <div className="container">
            <div className={css.mapCard}>
                <div className={css.map}>
                    <ReactMapGL
                        {...viewport}
                        mapStyle="mapbox://styles/anvar1997/cksebp8mj8s4x17peh5cpg4pf"
                        mapboxApiAccessToken={"pk.eyJ1IjoiYW52YXIxOTk3IiwiYSI6ImNrc2VibnF3ZjBmYzMydW9mOGN5ZWt2NTUifQ.z8-kPZ7kriE7c1DXXn8paQ"}
                        width="100%"
                        height="100%"
                        onViewportChange={(viewport) => setViewport(viewport)}>

                    </ReactMapGL>
                </div>
            </div>
        </div>
    );
};




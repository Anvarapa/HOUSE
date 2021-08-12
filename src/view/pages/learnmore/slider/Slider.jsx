import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import "./slider.css"
import css from './slider.module.css'


class Slider extends React.Component {
    render() {
        return (
            <div className="slider">
                <Carousel infiniteLoop autoPlay interval="3000"
                           transitionTime="1000" thumbWidth="221px"
                          width="901px" emulateTouch="true" >
                    <div>
                        <img src="/img/imgslider.png"/>
                    </div>
                    <div>
                        <img src="/img/imgslider.png"/>
                    </div>
                    <div>
                        <img src="/img/imgslider.png"/>
                    </div>
                    <div>
                        <img src="/img/imgslider.png"/>
                    </div>
                </Carousel>

                <div className={css.seller}>
                    <div className={css.seler__img}>
                        <img src="./img/man.png" alt="" />
                    </div>
                    <div className={css.premium__img}>
                        <img src="./img/premium.png" alt="" />
                    </div>
                    <div className={css.fcs}>
                        <p className={css.name}>Micheal James</p>
                        <p className={css.special}>Real Estate Specialist</p>
                        <button className={css.btn__phone}>
                        VIEW PHONE
                        </button>
                        <button className={css.btn__send}>
                        SEND MESSAGE
                        </button>
                    </div>
                </div>  
            </div>


        )
    };
}

export default Slider;
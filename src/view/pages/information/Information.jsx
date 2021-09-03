import React from 'react'
import css from './information.module.css'


export const Information=()=>{
    return (
        <div className={css.about}>
            <h1>About us</h1>
            <p>“FastHome” is a leader in the construction market. 
                We build multi-floor residential buildings, commercial buildings, cultural and social facilities, bridges, roads, tunnels, and reconstruct buildings and structures.</p>
            <div className={css.object}>
                <img src="./img/building.png" alt="" />
                <p>MULTI-FLOOR RESIDENTIAL BUILDINGS 
                     50 OBJECTS</p>
                <img src="./img/bridge.png" alt="" />
                <p> BRIDGES, ROADS, TUNNELS</p>
                <img src="./img/theatre.png" alt="" />
                <p>CULTURAL AND SOCIAL FACILITIES – 15 OBJECTS</p>
            </div>
            <h1>Proffesional specialist</h1>
            
            <p>Specialists from Russia, Kazakhstan, Turkey, Korea, Japan, and other countries work with us.

            The number of employees of the “Avangard-Style” company consists of qualified specialists, engineers, and workers of various specialties. Engaged in the construction of buildings and structures of various categories of complexity, they have gained invaluable experience, which allows our company to build new objects in a short time, without forgetting about the quality and reliability.</p>
            <div className={css.my}>
                <img src="./img/anvar.jpg" alt="" />
                <p>Anvar Apa<br/><br/>CEO</p>
                <img src="./img/jasulan.jpg" alt="" />
                <p>Jasu Jasulan<br/><br/>CEO</p>
                <img src="./img/murzik.jpg" alt="" />
                <p>Murzik<br/><br/>CEO</p>
            </div>
            <h1>Laboratory examination</h1>
            <p>During every construction stage, we conduct a laboratory examination for quality compliance of all building materials used.</p>
            <div className={css.laboratory}>
                <img src="./img/galochka.png" alt="" />
                <p>FROM FOUNDATION CONCRETE TO ROOFING MATERIALS</p>
                <img src="./img/galochka.png" alt="" />
                <p>FROM MASONRY WALLS TO INTERIOR DECORATION</p>
                <img src="./img/galochka.png" alt="" />
                <p>PLUMBING, WINDOWS, DOORS, ETC.</p>
            </div>
        </div>
    )
}

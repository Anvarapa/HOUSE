import css from "./../forSale.module.css";
import lopa from '../../../assets/img/lopa.svg'
import {useState, useEffect} from 'react'
export const Block1 = (props) => {



    return (
        <div className={css.block1}>
            <h1 className={css.block1_h1}>
                Your dream house is here
            </h1>
            <div className={css.search}>
                <form action="">
                    <input onChange={(e) => {
                        props.setValue(e.target.value)
                    }} className={css.input} type="text"/>
                    <img src={lopa} alt=""/>
                </form>
            </div>

        </div>
    )
}

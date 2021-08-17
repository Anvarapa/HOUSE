import React from 'react'
import css from './explanation.module.css'

export default function Explanation() {
    return (
        <div className={css.explanation}>
            <p className={css.title}>Explanation</p>
            <p className={css.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac convallis tellus pellentesque non odio consectetur bibendum. Auctor leo risus in tristique sit enim nec sed. Ridiculus vulputate facilisi a velit cursus sapien egestas nec, accumsan. </p>
        </div>
    )
}

import React from 'react'
import classes from './Control.css'

const control = (props) =>
(
    <div className={classes.Control}>
         <div className={classes.Label}>
            {props.ingredientLabel}({props.count})
        </div>
        <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.add}>More</button>
    </div>
);

export default control;
import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../Burger/UI/Button/Button'
import classes from './CheckOutSummary.css' 

const checkOutSummary = (props) =>{
    return(
        <div className={classes.CheckOutSummary}>
            <h1>Here's Your Burger</h1>
            <div style={{width:'100%', margin:'auto' }}>
               <Burger ingredients={props.ingredients}/>
            </div>
            <div>
                <Button btnType="Success" clicked= {props.continue}>Continue</Button>
                <Button btnType="Danger" clicked = {props.cancelPurchase}>Cancel</Button>
            </div>
        </div>
    );
}

export default checkOutSummary;
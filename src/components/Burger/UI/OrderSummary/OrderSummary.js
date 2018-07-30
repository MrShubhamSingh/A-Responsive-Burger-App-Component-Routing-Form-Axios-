import React from 'react'
import Aux from '../../../../hoc/auxilary'
import MyButton from '../../UI/Button/Button'
import classes from './OrderSummary.css'

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return (<li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>);
    });
    return(
       <Aux>
           <h4 className={classes.X} onClick={props.propsToHide}>X</h4>
           <h2>ORDER SUMMARY</h2>
           <h3>Total Price = {props.price}</h3>
           <ul>{ingredientSummary}</ul>
           <MyButton btnType="Success" clicked={props.continuePurchase}>CONTINUE</MyButton>
           <MyButton btnType="Danger" clicked={props.propsToHide}>CANCEL</MyButton>
        </Aux>
    )
}

export default orderSummary;
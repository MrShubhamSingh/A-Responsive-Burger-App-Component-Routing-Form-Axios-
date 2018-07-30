import React from 'react';
import classes from './BuildControls.css';
import Control from './Control/control'

const controls = [
    { ingredientLabel: 'Cheese', count: 0, type: 'cheese' },
    { ingredientLabel: 'Meat', count: 0, type: 'meat' },
    { ingredientLabel: 'Bacon', count: 0, type: 'bacon' },
    { ingredientLabel: 'Salad', count: 0, type: 'salad' }
];

const buildControls = (props) =>
    (
        <div className={classes.BuildControls}>
        <p>Price:<strong>{props.price}</strong></p>
            {controls.map(ctrl => (
                <Control
                    key={ctrl.ingredientLabel}
                    count={ctrl.count = props.ingredients[ctrl.type]}
                    ingredientLabel={ctrl.ingredientLabel}
                    add={() => props.ingredientsAdded(ctrl.type)}
                    remove={() => props.ingredientsRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    
                />
            ))}
            <button className={classes.OrderButton} disabled={!props.order} 
                    onClick={props.show}>Order now</button>
        </div>
    );

export default buildControls;
import React from 'react';
import classes from './finalOrder.css';


const finalOrder=(props)=>{
    let transformedIngredients=[];
    
    for(let x in props.ingredients){
        transformedIngredients.push(
            {
                name: x,
                amount:props.ingredients[x]
            }
        )
    }

    const finalIngredients = transformedIngredients.map(i=>{
        return <span 
        key={i.name}
            style={{
            textTransform:'capitalize',
            display:'inline-block',
            margin: '5px',
            border: '0.5px solid grey',
            padding:'5px',
            boxShadow: '2px 3px 2px grey',
            boxSizing: 'border-box'
        }}>
        {i.name} - {i.amount}
         </span>
    })
        

    return(
       <div className={[classes.finalOrder , classes.smallBox].join(' ')}>
        <p>Ingredients: {finalIngredients}</p>
        <p>Total: <strong>{props.price}</strong> Rs.</p>
      </div>
   )}

export default finalOrder;
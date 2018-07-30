import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../Navigationitem/NavigationItem'

const navigationItems = (props) =>(
    <ul className={classes.NavigationItems} >
       <NavigationItem link="/" exact>Make Burger</NavigationItem>
       <NavigationItem link="/yourOrder">Your Order</NavigationItem>
    </ul>
);

export default navigationItems;
import React from 'react';
import LogoImage from '../../assets/images/logo.png'
import classes from './Logo.css'

const logo = (props) =>(
<div className={classes.Logo}>
    <img src={LogoImage} alt="My Burger"/>
</div>
);

export default logo;


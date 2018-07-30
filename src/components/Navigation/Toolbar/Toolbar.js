import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../../Navigation/Navigationitems/NavigationItems'
import Ionicon from 'react-ionicons'



const toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <div className={classes.LargeDevices} onClick={props.toggleMenu}><Ionicon icon="ios-apps-outline" fontSize="35px" color="Brown"></Ionicon></div>
        <div className={[classes.LogoPosition, classes.SmallDevices].join(' ')}>
        <Logo/>
        </div>
        <nav className={classes.SmallDevices}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;
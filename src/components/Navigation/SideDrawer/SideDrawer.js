import React,{Fragment} from 'react';
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../../Navigation/Navigationitems/NavigationItems'
import Backdrop from '../../Burger/UI/Backdrop/Backdrop'
const sideDrawer = (props) =>{

    let attachedClasses =[classes.SideDrawer,classes.Close];
    if(props.open)
   { attachedClasses=[classes.SideDrawer, classes.Open]}

    return(
       
     <Fragment >
          <Backdrop hide={props.closed} show={props.open}/>
         <div className={attachedClasses.join(' ')}>
         
         <div className={classes.LogoSize}>
           <Logo/>
         </div>
         
       
         <nav onClick={props.closed}>
           <NavigationItems/>
         </nav>
      
        </div>
      
    </Fragment>
);
};

export default sideDrawer;
import React,{Component} from 'react'
import Aux from '../../hoc/auxilary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


class Layout extends Component{
    state={
        sideDrawerOpen : false
    }
    
    sideDrawerClosedHandler=(event)=>{
           this.setState({sideDrawerOpen:false})
    }

    sideDrawerOpenHandler=(event)=>{
        this.setState({sideDrawerOpen:true})
 }

    render()
 {
     return (
    <Aux>
        <Toolbar toggleMenu={this.sideDrawerOpenHandler}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.sideDrawerOpen}/>
        <main className={classes.Content}  >
          {this.props.children}
        </main>
    </Aux>
);
}
}

export default Layout;
import React,{Component} from 'react';
import classes from './Modal.css'
import Aux from '../../../../hoc/auxilary'
import Backdrop from '../Backdrop/Backdrop'


class modal extends Component{

    shouldComponentUpdate=(nextProps,nextState)=>{
        return nextProps.propsToShow !== this.props.propsToShow
    }

    componentWillUpdate=()=>{
        console.log('Updated')
    }

    render(){
            
        return(
            <Aux>
            <Backdrop show={this.props.propsToShow} hide={this.props.propsToHide}/>
               <div className={classes.Modal} style={{
           transform : this.props.propsToShow ? 'translateY(0)':'translateY(-100vh)',
           opacity: this.props.propsToShow ? 1 : 0
                }}>
           {this.props.children}
                 </div>
          </Aux>
        )
    }
    
}
export default modal;
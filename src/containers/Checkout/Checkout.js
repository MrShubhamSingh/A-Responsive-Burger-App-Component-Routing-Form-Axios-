import React, {Component} from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData'


class Checkout extends Component{
state={
    ingredients:{},
    totalPrice:null
}

componentDidMount = ()=>{
    if(this.props.location.query&&this.props.location.total)
    {
        this.setState({ingredients:this.props.location.query, totalPrice:this.props.location.total})
    }
}

cancelPurchaseHandler = () => {
    this.props.history.goBack();
}
continueToOrder=()=>{
  this.props.history.replace('/CheckOut/ContactData')
}

render(){

    return (
          <div>
              <CheckOutSummary ingredients={this.state.ingredients} 
              cancelPurchase={this.cancelPurchaseHandler}
              continue={this.continueToOrder}/>
              <Route path={this.props.match.path+'/ContactData'}
              render={()=>(<ContactData ingredients={this.state.ingredients} finalPrice = {this.state.totalPrice}/>)}/>
          </div>
    );
}
}

export default Checkout;
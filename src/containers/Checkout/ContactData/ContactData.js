import React , {Component} from 'react';
import Button from '../../../components/Burger/UI/Button/Button'
import classes from './ContactData.css'
import AxiosInstance from '../../../axios-orders'
import {withRouter} from 'react-router-dom'
import Input from '../../../components/Burger/UI/Input/Input'
class ContactData extends Component{
    state = {
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
        
    }

    orderHandler=(event)=>{

      event.preventDefault();
     
      const order = {
      ingredients:this.props.ingredients,
      price:this.props.finalPrice,
      
      customer:{
          name:'Shubham',
          age:'22',
          address:{
              street:'4th main road',
              zipCode:'12345',
              country:'India'
          },
          email:'ss@mymail.com'
      },
      deliveryMethod:'Fastest'    
  }
      AxiosInstance.post('/orders.json',order)
      .then(response=>{console.log(response)})
      .then(this.props.history.push('/'))
      .catch(error=>{console.log(error)})
    }

    render(){
        return(
           <div className={[classes.ContactData, classes.smallBox].join(' ')}>
               <h4>Please Enter Your Details</h4>
               <form>
                   <Input inputtype='input' type='text' name='Name' placeholder="Name"/>
                   <Input inputtype='input' type='text' name='Email' placeholder="Email"/>
                   <Input inputtype='input' type='text' name='Street' placeholder="Street"/>
                   <Input inputtype='input' type='text' name='postalCode' placeholder="Postal Code"/>
               </form>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
           </div>
        )
    }
}

export default withRouter(ContactData);
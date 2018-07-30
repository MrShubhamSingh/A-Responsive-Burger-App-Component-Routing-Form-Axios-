import React,{Component} from 'react';
import FinalOrderComponent from '../../components/finalOrder/finalOrder'
import Axios from '../../axios-orders'

class finalOrder extends Component{
state={
    orders:[]
}


componentDidMount(){

    Axios.get('/orders.json')
    .then(response=>{
        const fetchedOrders=[];
        for(let key in response.data){
            fetchedOrders.push({
                ...response.data[key],
                id:key
            })
        }
        this.setState({orders:fetchedOrders})
    })
    .catch(error=>{alert(error)})

}

    render(){
        return(
             <div>
                 {this.state.orders.map(x=>
                 (
                    <FinalOrderComponent
                    key = {x.id}
                    ingredients={x.ingredients}
                    price={+x.price}
                   />
                 ))
                     
                 }
            </div>
        )
    }
}

export default finalOrder;
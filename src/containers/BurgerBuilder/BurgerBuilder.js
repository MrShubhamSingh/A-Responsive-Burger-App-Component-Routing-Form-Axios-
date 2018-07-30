import React,{Component, Fragment} from 'react'
import Aux from '../../hoc/auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Burger/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/UI/OrderSummary/OrderSummary'
import Axios from 'axios';
import Spinner from '../../components/Burger/UI/Spinner/spinner'


const INGREDIENT_PRICE = {
   salad:10,
   meat:30,
   cheese:10,
   bacon:35
}

class afterIngrdientsLoaded extends Component{
    state = {
        ingredients:null,
        totalPrice:30,
        order:false,
        continue:false
    }
   
componentDidMount=()=>{
    Axios.get("https://burger-e6ee9.firebaseio.com/ingredients.json")
    .then(response=>{
                      this.setState({ingredients:response.data})
                    })
}
showModal =()=> this.setState({continue:true})
hideModal = ()=>this.setState({continue:false})

updateOrder(ingredients){

        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey];
        }).reduce((total,el)=>{
            return total+el;
        },0);
        this.setState({order:(sum>0)})
    }

addIngredientHandler = (type)=> {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount+1;
    const updatedIngredients = {
        ...this.state.ingredients
    } 
    updatedIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice+INGREDIENT_PRICE[type];

    this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
    this.updateOrder(updatedIngredients);
}

removeIngredientHandler = (type)=>{
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0){
        return;
    }
    const newCount = oldCount-1;
    const updatedIngredients = {
        ...this.state.ingredients
    }
    updatedIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICE[type];

    this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
    this.updateOrder(updatedIngredients);
}

continuePurchaseHandler =()=>{

this.props.history.push({
    pathname :'/CheckOut',
    query : this.state.ingredients,
    total:this.state.totalPrice
})

}


render(){

        const disabledInfo = {
            ...this.state.ingredients
        };
          for(let key in disabledInfo)
          {
              disabledInfo[key] = disabledInfo[key] <= 0
          }
        

      let afterIngrdientsLoaded=<Spinner/>;


      if (this.state.ingredients)
      
       afterIngrdientsLoaded  = 
      (
          <Aux>
          <Modal propsToShow = {this.state.continue} propsToHide={this.hideModal}>
              <OrderSummary ingredients={this.state.ingredients} 
              price={this.state.totalPrice} 
              propsToHide={this.hideModal}
              continuePurchase={this.continuePurchaseHandler}/>
          </Modal>
         
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls 
          ingredients={this.state.ingredients}
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled = {disabledInfo}   
          price={this.state.totalPrice} 
          show={this.showModal}              
          order={this.state.order} 
          />
      </Aux>   
      )
        return(
            <Fragment>
            {afterIngrdientsLoaded}
            </Fragment>
        );
    }
}

export default afterIngrdientsLoaded;
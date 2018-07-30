import React, { Component } from 'react';
import Layout from'./components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/Checkout/Checkout'
import PlaceOrder from './components/PlaceOrder'
import {Route,Switch} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
           <Route path = '/' exact component={BurgerBuilder}/>
           <Route path = '/CheckOut' component={CheckOut}/>
           <Route path = '/yourOrder' component={PlaceOrder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

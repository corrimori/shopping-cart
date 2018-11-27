import React, { Component } from 'react';
import CartHeader from './components/CartHeader';
import CartItems from './components/CartItems';
import CartFooter from './components/CartFooter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
    );
  }
}

export default App;

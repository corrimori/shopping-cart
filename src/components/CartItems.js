import React from 'react'
import CartItemComponent from './CartItemComponent'

const CartItems = ({ itemsList }) => {
  console.log('itemsList>>>', itemsList)
  // console.log('id', itemsList.id, 'name', itemsList.name)
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {itemsList.map((item, i) => (
          <CartItemComponent
            key={i}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  )
}

export default CartItems

import React from 'react'

const CartItemComponent = ({ product, quantity }) => {
  // console.log('props', props);
  let { name, priceInCents: price } = product
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{name}</div>
        <div className="col-md-2">${price / 100}</div>
        <div className="col-md-2">{quantity}</div>
      </div>
    </div>
  )
}

export default CartItemComponent

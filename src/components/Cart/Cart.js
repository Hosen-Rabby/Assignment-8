import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props)
    // console.log(props.cart[0].key)
    // const author = props.cart[0].key;
    const { cart } = props;
    let total = 0;

    for (const item of cart){
        total = total + item.price;
    }

    return (
        <div>
            <h3>Select : {props.cart.length}</h3>
            <h3>Total : {total}</h3>
            <p>Total Author:</p>
            {/* <p>{author}</p> */}
        </div>
    );
};

export default Cart;
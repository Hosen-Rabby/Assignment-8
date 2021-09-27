import React, { useEffect, useState } from 'react';
import Book from '../../Book/Book';
import Cart from '../../Cart/Cart';
import './Details.css';

const Details = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart[0].key);


    // load data
    useEffect(()=> {
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    // count
    const addToCart = (book) =>{
        const newCart = [...cart, book];
        setCart(newCart);
    }

    return (
        <div className = 'details'>
            <div className = 'bookDetails'>
                {
                    books.map(book => <Book 
                        key = {book.key}
                        book = {book}
                        addToCart = {addToCart}
                    ></Book>)
                }
            </div>
            <div className = 'cartDetails'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Details;
import React from 'react';
import './Book.css'

const Book = (props) => {

    const {img, name, author, price, star, starCount} = props.book
    return (
        <div className = 'bookItem'>
            <div className = 'item'>
                <img src = {img} alt ='Author'/>
                <h4>Author : {author}</h4>
                <h5>Best Book: {name}</h5>
                <p>Avg. Book price: ${price}</p>
                <p>Rate: {star}</p>
                <p>Total sell: {starCount}</p>
                <button onClick = {() => props.addToCart(props.book)}>Select</button>
            </div>
        </div>

    );
};

export default Book;
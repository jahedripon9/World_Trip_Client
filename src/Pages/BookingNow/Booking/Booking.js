import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Booking.css'

const Booking = () => {
    const [books, setBooks]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(rse => rse.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div className='mx-20'>
            <div class=" text-center mb-8">
                    <h1 class="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-4 text-yellow-600">Booking your World Trips</h1>
                    
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                    </div>
                    </div>

            <div className='item-container'>
            {
                    books.map(book => <Book
                    key={book._id}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Booking;
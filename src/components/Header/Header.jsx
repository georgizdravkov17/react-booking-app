import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <h1 className="big-heading">A lifetime of discounts? It's Genius.</h1>
        <h3 className="small-heading">Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking.com account</h3>
        <button className="btn">Sign in / Register</button>
        <div className="searchbar">
           <input type="text" name="who" id="who" placeholder="Who are you" />
           <input type="date" name="date" id="date" placeholder="Check-in / Check-out" /> 
           <input type="text" name="guests" id="guests" placeholder="Number of guests" />
           <button type="submit" className="search-button">Search</button>
        </div>
    </header>
  )
}

export default Header
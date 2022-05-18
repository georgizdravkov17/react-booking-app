import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBed, faPlane, faCar, faTaxi, faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation = () => {

  const navigate = useNavigate();

  return (
    <nav className="nav">
         <div className="upper">
            <Link to="/">
              <h1 className="heading">
                <span className="icon">
                <FontAwesomeIcon icon={faHotel} />
                </span>
                Booking.com
              </h1>
              </Link>
            <div className="buttons">
                <button className="btn" onClick={() => { navigate("/login") }}>Sign in</button>
                <button className="btn" onClick={() => { navigate("/register") }}>Register</button>
            </div>
         </div>
         <div className="list">
           <div className="item">
             <FontAwesomeIcon icon={faBed} className="icon" />
              <Link to="/">Stays</Link>
           </div>
           <div className="item">
             <FontAwesomeIcon icon={faPlane} className="icon"/>
              <Link to="/flights">Flights</Link>
           </div>
           <div className="item">
             <FontAwesomeIcon icon={faCar} className="icon"/>
              <Link to="/car-rentals">Car rentals</Link>
           </div>
           <div className="item">
             <FontAwesomeIcon icon={faAlignCenter} className="icon"/>
              <Link to="/atractions">Attractions</Link>
           </div>
           <div className="item">
             <FontAwesomeIcon icon={faTaxi} className="icon"/>
              <Link to="/airport-taxis">Airport-taxis</Link>
           </div>
         </div>  
    </nav>
  )
}

export default Navigation
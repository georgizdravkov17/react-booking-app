import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className="footer">
      <p>All rights reserved by Georgi Zdravkov</p>
      <div className="social-media">
          <a href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon className="icon" icon={faHotel}  />
          </a>
          <a href="https://www.instagram.com" target="_blank">
          <FontAwesomeIcon className="icon" icon={faHotel} />
          </a>
          <a href="https://www.youtube.com" target="_blank">
          <FontAwesomeIcon className="icon" icon={faHotel} />
          </a>
          <a href="https://www.google.com" target="_blank">
          <FontAwesomeIcon className="icon" icon={faHotel} />
          </a>
      </div>
    </footer>
  )
}

export default Footer
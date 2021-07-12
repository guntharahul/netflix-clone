import React, { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
      ></img>
      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
      ></img>

      <ul className='nav__navListItems'>
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>News & Popular</li>
        <li>My List</li>
      </ul>
    </div>
  );
};

export default NavBar;

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Title from './Title';
import Header from './Header';

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

          <Header/>

        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
          <Title/>

            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

            {/* <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
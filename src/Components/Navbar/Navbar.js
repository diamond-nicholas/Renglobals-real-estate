/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg '>
      <div class='container-fluid'>
        <Link className='nav-link white' to='/'>
          RG
        </Link>

        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class=' navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <Link className='nav-link white' to='/hotdeals'>
                Hot Deals
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link white' to='/elite'>
                Elite Service Plans
              </Link>
            </li>
            {/* housing */}
            <li class='nav-item dropdown'>
              <Link className='nav-link white' to='/housing'>
                Housing
              </Link>
            </li>
            {/* estate */}

            <li class='nav-item dropdown'>
              <Link className='nav-link white' to='/estate'>
                Estates
              </Link>
            </li>
            {/* T&C */}
            <li class='nav-item dropdown'>
              <Link className='nav-link white' to='/t&c'>
                Terms&Conditions
              </Link>
            </li>

            <li class='nav-item'>
              <Link className='nav-link white' to='/contact'>
                Contact
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link white' to='/about'>
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

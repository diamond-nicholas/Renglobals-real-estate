import React from 'react';
import './Socials.scss';
const Socials = () => {
  return (
    <div className='socials'>
      <div className='socials-left'>
        <h4>
          <i class='fal fa-copyright'></i> Renglobals - All rights reserved{' '}
        </h4>
      </div>
      <div className='socials-right'>
        <ul>
          <li>
            <i class='fab fa-facebook-f'></i>
          </li>
          <li>
            <i class='fab fa-instagram'></i>
          </li>
          <li>
            <i class='fab fa-twitter'></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;

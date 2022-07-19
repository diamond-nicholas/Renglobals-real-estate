import React from 'react';
import './HomeList.scss';

const HomeList = () => {
  return (
    <div className='hl_wrapper'>
      <div className='hl_cards'>
        <div className='card_img'>
          <img
            src='https://nairametrics.com/wp-content/uploads/2022/01/Buy-home.jpg'
            alt=''
          />
        </div>
        <div className='card_content'>
          <p>
            <strong>Aja Housing</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeList;

import React from 'react';
import './EstatesCards.scss';

const EstatesCards = () => {
  return (
    <div className='escards_wrapper'>
      <div className='escards_cards'>
        <div className='card_img'>
          <img
            src='https://nairametrics.com/wp-content/uploads/2022/01/Buy-home.jpg'
            alt=''
          />
        </div>
        <div className='card_content'>
          <h4 text-left>
            <strong>Imperial and Park Gardens</strong>
          </h4>
          <div className='pricing'>
            <p>#3,000,000</p>
            <i class='fal fa-ruler-triangle'>600</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstatesCards;

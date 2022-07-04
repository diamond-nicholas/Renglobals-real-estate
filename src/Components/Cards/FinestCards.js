import React from 'react';
import './FinestCards.scss';

const FinestCards = () => {
  return (
    <div wrapper>
      <div className='card'>
        <img src='images/estate1.jpeg' alt='prop1' />
        <div className='info'>
          <h2>Rehoboth Housing</h2>
          <p>#12,000,000</p>
          <p>50 Sq Meter</p>
        </div>
      </div>
    </div>
  );
};

export default FinestCards;

import React from 'react';
import './HotDealsCards.scss';

const HotdealsCards = () => {
  return (
    <div className='ht_wrapper'>
      <div className='cards'>
        <div className='card_img'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BlNFLwdrBsoyHTSdu6b37fHqG6YiMOjAVA&usqp=CAU'
            alt=''
          />
        </div>
        <div className='card_content'>
          <h3>Buy 5plots and get 20% discount</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo non
            rerum, consequuntur assumenda iusto maxime qui commodi atque esse
            aliquid.
          </p>
          <button className='btn'>Read More </button>
        </div>
      </div>
    </div>
  );
};

export default HotdealsCards;

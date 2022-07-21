import React from 'react';
import HotDealsCards from '../../Components/Cards/HotDealsCards';
import Navbar from '../../Components/Navbar/Navbar';
import Socials from '../../Components/Socials/Socials';
import './HotDeals.scss';

const HotDeals = () => {
  return (
    <div>
      <Navbar />
      <div className='ht_main'>
        <section className='ht_body'>
          <header>
            <h3>Hot Deals</h3>
          </header>
          <section className='ht_content'>
            <div className='card1'>
              <HotDealsCards />
            </div>
            <div className='card2'>
              <HotDealsCards />
            </div>
            <div className='card3'>
              <HotDealsCards />
            </div>
          </section>
        </section>
      </div>
      <Socials />
    </div>
  );
};

export default HotDeals;

import React from 'react';
import EstatesCards from '../../Components/Cards/EstatesCards';
import Navbar from '../../Components/Navbar/Navbar';
import Socials from '../../Components/Socials/Socials';
import './Estate.scss';

const Estate = () => {
  return (
    <div>
      <Navbar />
      <div className='estate_main mb-5'>
        <section className='estate_body'>
          <header>
            <h3>Estates</h3>
          </header>
          <section className='estate_content'>
            <div className='estate_wrapper'>
              <div className='card1'>
                <EstatesCards />
              </div>
            </div>
          </section>
        </section>
      </div>
      <Socials />
    </div>
  );
};

export default Estate;

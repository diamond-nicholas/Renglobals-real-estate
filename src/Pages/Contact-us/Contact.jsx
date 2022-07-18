import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Socials from '../../Components/Socials/Socials';
import './Contact.scss';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact_main'>
        <section className='contact_body'>
          <section className='header'>
            <h3>Contact Us</h3>
          </section>
          <section className='feedback'>
            <h2>Customer Feedback</h2>
            <p>
              we would be happy to help and advise if you have any questions or
              enquiries
            </p>
          </section>
          <form>
            {/* <input type='text' /> */}
            <div className='names'>
              <input
                type='text'
                name='first_name'
                id='first_name'
                placeholder='First Name'
              />
              <input
                type='text'
                name='last_name'
                id='last_name'
                placeholder='Last Name'
              />
            </div>
            <div className='email_phone'>
              <input type='text' name='phone' id='phone' placeholder='Phone' />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='
             Email'
              />
            </div>
            <div className='message'>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='5'
                placeholder='Message'
              ></textarea>
            </div>
            <button className='btn'>Submit</button>
          </form>
        </section>
      </div>
      <Footer />
      <Socials />
    </div>
  );
};

export default Contact;

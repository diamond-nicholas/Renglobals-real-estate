import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Socials from '../../Components/Socials/Socials';
import './Elite.scss';

const Elite = () => {
  return (
    <div>
      <Navbar />
      <section className='esp_main'>
        <header>
          <h3>Elite Service Plan</h3>
        </header>
        <section className='esp_content'>
          <form>
            <div className='esp_wrapper'>
              <div className='esp_top d-flex '>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
              </div>
              <div className='esp_top d-flex '>
                <input type='text' placeholder='Phone' />
                <input type='text' placeholder='Email' />
              </div>
              <div className='pros_client'>
                <p>
                  {' '}
                  <strong>Are you a prospective/existing client?</strong>
                </p>
                <select class='form-select' aria-label='Default select example'>
                  <option value='1'>Prospective Client</option>
                  <option value='2'>Existing Client</option>
                </select>
              </div>
              <div className='contact_opt'>
                <p>
                  {' '}
                  <strong>How would you preferred to be contacted?</strong>
                </p>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value='option1'
                  />
                  <label class='form-check-label' for='inlineCheckbox1'>
                    Whatsapp
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='option2'
                  />
                  <label class='form-check-label' for='inlineCheckbox2'>
                    Email
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    value='option3'
                  />
                  <label class='form-check-label' for='inlineCheckbox3'>
                    Both
                  </label>
                </div>
              </div>
              <div className='would_you_love'>
                <p>
                  <strong>
                    Would you love to get updates on our estate(pictures &
                    videos)?
                  </strong>
                </p>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    value='option3'
                  />
                  <label class='form-check-label' for='inlineCheckbox3'>
                    Yes
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='inlineCheckbox3'
                    value='option3'
                  />
                  <label class='form-check-label' for='inlineCheckbox3'>
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className='submit'>
              <button className='btn'>Submit</button>
            </div>
          </form>
          <p>
            <strong>For more infomation contact us on</strong> +2349167194822,
            +2348145220426
          </p>
        </section>
      </section>
      <Socials />
    </div>
  );
};

export default Elite;

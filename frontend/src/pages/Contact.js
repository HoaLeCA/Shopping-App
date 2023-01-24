import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from 'react-icons/ai';

function Contact() {
  return (
    <>
      <Meta title='Contact Us' />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                title='map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10034.153071980074!2d-114.11514517370475!3d51.0431481642376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fda8f5e129b%3A0x1103eed3f7b8804a!2sThe%20Sentry%20Box!5e0!3m2!1sen!2sca!4v1674539429733!5m2!1sen!2sca'
                width='600'
                height='450'
                className='border-0 w-100'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h5 className='contact-title mb-4'>Contact</h5>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Mobil number'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className='w-100 form-control'
                        cols='30'
                        rows='5'
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h5 className='contact-title mb-4'>Get in touch with us</h5>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome />{' '}
                        <address className='mb-0'>
                          1810 11 Ave SW Calgary
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlinePhone /> <a href='tel: 79797979'> 79797979</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center email'>
                        <AiOutlineMail />
                        <p className='mb-0'>harrycodele@gmail.com</p>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineInfoCircle />{' '}
                        <p className='mb-0'>
                          Monday - Friday from 9:00 AM - 4:30 PM
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

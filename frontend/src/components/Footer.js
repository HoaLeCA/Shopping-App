import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h3 className='text-white mb-0'>Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className='col-7'>
              <div class='input-group '>
                <input
                  type='text'
                  className='form-control py-1'
                  placeholder='Your email address'
                  aria-label='Your email address'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-3' id='basic-addon2'>
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  69 10 Avenue Street SW <br /> Calgary, Alberta, Canada <br />{' '}
                  Postal Code: T3C3RC
                </address>
                <a
                  href='tel: +1 888999222'
                  className='mt-3 d-block mb-2 text-white'
                >
                  +1 888999222
                </a>
                <a
                  href='mailto:harrycodele@gmail.com'
                  className='mt-3 d-block mb-0 text-white'
                >
                  harrycodele@gmail.com
                </a>
                <div className='socal-icons d-flex align-items-center  gap-30 mt-4'>
                  <a href=''>
                    <BsLinkedin className='text-white fs-3' />
                  </a>
                  <a href=''>
                    <BsGithub className='text-white fs-3' />
                  </a>
                  <a href=''>
                    <BsYoutube className='text-white fs-3' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Term of Services</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FQA</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Size Charts</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Accessories</Link>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Smart Watches</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center text-white'>
                &copy; {new Date().getFullYear()} Powered by HoaLeCA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

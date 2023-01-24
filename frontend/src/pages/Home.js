import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Blogcard from '../components/Blogcard';
import Productcard from '../components/Productcard';
import Specialproduct from '../components/Specialproduct';
import Meta from '../components/Meta';

function Home() {
  return (
    <>
      <Meta title='Home' />

      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative '>
                <img
                  src='images/main-banner-1.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPPERCHARDED FOR PROS.</h4>
                  <h5>Ipad S13+Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo
                  </p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-9 justify-content-between align-items-center'>
                <div className='small-banner position-relative '>
                  <img
                    src='images/catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALES.</h4>
                    <h5>Ipad S13+Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img
                    src='images/catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL.</h4>
                    <h5>Buy Ipad Air.</h5>
                    <p>
                      From $599 or <br /> $49.91/mo. for 12mo*
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img
                    src='images/catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>15% OFF.</h4>
                    <h5>Smartwatch 7.</h5>
                    <p>
                      Shop the latest brand <br /> styles and colors
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img
                    src='images/catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>FREE ENGRAVING.</h4>
                    <h5>AirPods Max.</h5>
                    <p>
                      Hight-fidelity playback & <br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all order over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Afforable Prices</h6>
                    <p className='mb-0'>Get factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% protect payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex  justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Music & Gamming</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Music & Gamming</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Features Collection</h3>
            </div>
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
        </div>
      </section>
      <section className='famous-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-cart position-relative'>
                <img
                  src='images/famous-1.jpg'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo.for 24mo*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-cart position-relative'>
                <img
                  src='images/famous-2.png'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Big Screen</h5>
                  <h6 className='text-dark'>App McBook Air</h6>
                  <p className='text-dark'>From $399 or $16.62/mo.for 24mo*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-cart position-relative'>
                <img
                  src='images/famous-3.png'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Hifi Speacker</h5>
                  <h6 className='text-dark'>Waterproof Speaker </h6>
                  <p className='text-dark'>From $399.98 or $16.62/mo.</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-cart position-relative'>
                <img
                  src='images/famous-4.png'
                  className='img-fluid'
                  alt='famous'
                />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Watch</h5>
                  <h6 className='text-dark'>Series 6s </h6>
                  <p className='text-dark'>From $399.98 or $16.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <Specialproduct />
            <Specialproduct />
            <Specialproduct />
            <Specialproduct />
          </div>
        </div>
      </section>
      <section className='popular-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
        </div>
      </section>
      <section className='marquee-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='col-12'>
            <div className='marquee-inner-wraper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <Blogcard />
            </div>
            <div className='col-3'>
              <Blogcard />
            </div>
            <div className='col-3'>
              <Blogcard />
            </div>
            <div className='col-3'>
              <Blogcard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

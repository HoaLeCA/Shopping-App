import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Productcard from '../components/Productcard';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ImageZoom from 'react-image-zooom';
import ReactImageZoom from 'react-image-zoom';

const SingleProduct = () => {
  // const props = {
  //   width: 475,
  //   height: 400,
  //   zoomWidth: 470,
  //   img: 'https://www.cnet.com/a/img/resize/ed16291e2623257e7de0e08fc449e526e95278f2/hub/2022/09/07/db442b8b-9da2-422d-9b80-5550401cbfcd/apple-event-090722-iphone-14-pro-14-pro-max-7244.jpg?auto=webp&fit=crop&height=528&width=940',
  // };
  // condition to write review
  const [orderdProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title='Product Name' />
      <div className='main-product-wrapper home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  {/* <ReactImageZoom {...props} /> */}
                  <ImageZoom
                    src='https://www.cnet.com/a/img/resize/ed16291e2623257e7de0e08fc449e526e95278f2/hub/2022/09/07/db442b8b-9da2-422d-9b80-5550401cbfcd/apple-event-090722-iphone-14-pro-14-pro-max-7244.jpg?auto=webp&fit=crop&height=528&width=940'
                    alt='A image to apply the ImageZoom plugin'
                    zoom='300'
                  />
                </div>
              </div>
              <div className='other-product-image d-flex flex-wrap gap-10'>
                <div>
                  <ImageZoom
                    src='/images/watch.jpg'
                    zoom='300'
                    className='img-fluid'
                  />
                </div>
                <div>
                  <ImageZoom
                    src='/images/watch.jpg'
                    zoom='300'
                    className='img-fluid'
                  />
                </div>
                <div>
                  <ImageZoom
                    src='/images/watch.jpg'
                    zoom='300'
                    className='img-fluid'
                  />
                </div>
                <div>
                  <ImageZoom
                    src='/images/watch.jpg'
                    zoom='300'
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>
                    Kids Headphone Bulk 10 Packs Multi Colored for Student
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$100</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor='#ffd700'
                    />
                    <p className='t-review mb-0'>( 2 reviews )</p>
                  </div>
                  <a href='#review'>Write Review</a>
                </div>
                <div className='border-bottom py-3'>
                  <div className='d-flex algin-items-center gap-10 my-3'>
                    <h3 className='product-header'>Type:</h3>
                    <p className='product-data '>Watch</p>
                  </div>
                  <div className='d-flex algin-items-center gap-10 my-3'>
                    <h3 className='product-header'>Brand:</h3>
                    <p className='product-data '>Apple</p>
                  </div>
                  <div className='d-flex algin-items-center gap-10 my-3'>
                    <h3 className='product-header'>Category:</h3>
                    <p className='product-data '>Phone</p>
                  </div>
                  <div className='d-flex algin-items-center gap-10 my-3'>
                    <h3 className='product-header'>Tags</h3>
                    <p className='product-data '>Phone</p>
                  </div>
                  <div className='d-flex algin-items-center gap-10 my-3'>
                    <h3 className='product-header'>Availablity</h3>
                    <p className='product-data '>In Stock</p>
                  </div>
                  <div className='d-flex algin-items-center gap-10 my-3'>
                    <h3 className='product-header'>Availablity</h3>
                    <p className='product-data '>In Stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='description-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
              <div className='row'>
                <div className='col-12'>
                  <h4>Description</h4>
                  <div className='bg-white p-3'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore obcaecati dolorum ab saepe reiciendis. Ex
                      delectus libero autem? Ipsam minus architecto est aperiam
                      ut. Debitis veritatis distinctio iure rerum quia!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='review-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
              <div className='row'>
                <div className='col-12'>
                  <h4>Reviews</h4>
                  <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                      <div>
                        <h4>Customer Reviews</h4>
                        <div className='d-flex align-items-center gap-10 '>
                          <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={3}
                            activeColor='#ffd700'
                          />
                          <p className='mb-0'>Based on 2 reviews</p>
                        </div>
                      </div>
                      {orderdProduct && (
                        <div>
                          <a
                            href='/'
                            className='text-dark text-decoration-underline'
                          >
                            Write Review
                          </a>
                        </div>
                      )}
                    </div>
                    <div className='review-form py-4'>
                      <h4 id='review'>Write Review</h4>
                      <form action='' className='d-flex flex-column gap-15'>
                        <div>
                          <ReactStars
                            count={5}
                            size={24}
                            edit={true}
                            value={3}
                            activeColor='#ffd700'
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
                        <div className='d-flex justify-content-end'>
                          <button className='button border-0'>
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className='reviews mt-4'>
                      <div className='review'>
                        <div className='d-flex align-items-center gap-10'>
                          <h6 className='mb-0'>Hoa Le</h6>

                          <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={3}
                            activeColor='#ffd700'
                          />
                        </div>
                        <p className='mb-3'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas harum at delectus minus. Odit eligendi
                          maiores ab soluta ducimus, sint perferendis explicabo
                          temporibus cum adipisci quasi eius, ullam nobis
                          accusamus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

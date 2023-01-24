import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const Productcard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div
        className={` ${
          location.pathname === '/store' ? `gr-${grid}` : 'col-3'
        }`}
      >
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src='images/wish.svg' alt='wishlist' />
            </Link>
          </div>
          <div className='product-image'>
            <img
              src='images/watch.jpg '
              className='img-fluid'
              alt='product images'
            />
            <img
              src='images/watch-1.jpg '
              className='img-fluid'
              alt='product images'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Hevels</h6>
            <h5 className='product-titles'>
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={3}
              activeColor='#ffd700'
            />
            <p className={`description ${grid === 12 ? 'd-flex' : 'd-none'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ipsa reiciendis, amet quidem.
            </p>
            <p className='price'>$100</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link>
                <img src='images/view.svg' alt='view' />
              </Link>

              <Link>
                <img src='images/add-cart.svg' alt='addcart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === '/store' ? `gr-${grid}` : 'col-3'
        }`}
      >
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src='images/wish.svg' alt='wishlist' />
            </Link>
          </div>
          <div className='product-image'>
            <img
              src='images/watch.jpg '
              className='img-fluid'
              alt='product images'
            />
            <img
              src='images/watch-1.jpg '
              className='img-fluid'
              alt='product images'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Hevels</h6>
            <h5 className='product-titles'>
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={3}
              activeColor='#ffd700'
            />
            <p className={`description ${grid === 12 ? 'd-flex' : 'd-none'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              ipsa reiciendis, amet quidem.
            </p>
            <p className='price'>$100</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link>
                <img src='images/view.svg' alt='view' />
              </Link>

              <Link>
                <img src='images/add-cart.svg' alt='addcart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Productcard;

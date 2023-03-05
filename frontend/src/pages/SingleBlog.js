import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
const SingleBlog = () => {
  return (
    <>
      <Meta title='Dynamic Blog' />
      <BreadCrumb title='Dynamic Blog' />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-block-card'>
                <Link to='/blog' className='d-flex align-items-center gap-10'>
                  <BsArrowLeft />
                  Go back to blogs
                </Link>
                <h3 className='title'>Learning MERN Stack</h3>
                <img
                  src='images/blog-1.jpg'
                  className='w-100 img-fluid my-4'
                  alt='blog'
                />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum possimus accusamus minus cum fuga, quidem doloribus quae
                  corrupti cupiditate ut sapiente sit quas suscipit, nostrum
                  necessitatibus consequatur quis dolore! Neque!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

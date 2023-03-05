import React from 'react';
import { Link } from 'react-router-dom';
const Blogcard = () => {
  return (
    // <div className='col-3'>
    <div className='blog-card'>
      <div className='card-image'>
        <img src='/images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date'>Jan 01, 2023</p>
        <h5 className='title'>Learning MERN Stack</h5>
        <p className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
          error ab nihil laborum quod hic nobis quos sint consectetur.
        </p>
        <Link to='/blog/:id' className='button'>
          Read More
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Blogcard;

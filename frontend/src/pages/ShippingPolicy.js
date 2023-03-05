import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const ShippingPolicy = () => {
  return (
    <>
      <Meta title='Shipping Policy' />
      <BreadCrumb title='Shipping Policy' />
      <section className='policy-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingPolicy;

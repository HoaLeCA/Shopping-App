import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const RefundPolicy = () => {
  return (
    <>
      <Meta title='Refund Policy' />
      <BreadCrumb title='Refund Policy' />
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

export default RefundPolicy;

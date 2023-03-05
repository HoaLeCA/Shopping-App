import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
      <Meta title='Reset Password' />
      <BreadCrumb title='Reset Password' />
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='container-xxl'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Reset Password</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='form-control'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='confpassword'
                      placeholder='Confirm Password'
                      className='form-control'
                    />
                  </div>

                  <div className='d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

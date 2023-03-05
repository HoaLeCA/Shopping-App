import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Meta title='Sign Up' />
      <BreadCrumb title='Sign Up' />
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Create Account</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      name='firstname'
                      placeholder='First name'
                      className='form-control'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='lastname'
                      placeholder='Last name'
                      className='form-control'
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='form-control'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='form-control'
                    />
                  </div>

                  <div className='d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>Create</button>
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

export default Signup;

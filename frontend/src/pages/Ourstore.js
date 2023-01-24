import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from 'react-rating-stars-component';
import Productcard from '../components/Productcard';
import Meta from '../components/Meta';

const Ourstore = () => {
  // set default grid
  const [grid, setGrid] = useState(4);
  //alert(grid);
  return (
    <>
      <Meta title='Our Store' />
      <BreadCrumb title='Our Store' />
      <div className='store-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tivi</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'> Avaibility</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckDefault'
                      >
                        In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckChecked'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='flexCheckChecked'
                      >
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                </div>
                <h5 className='sub-title'> Price</h5>
                <div className='d-flex gap-10 align-items-center'>
                  <div className='form-floating '>
                    <input
                      type='email'
                      className='form-control'
                      id='floatingInput'
                      placeholder='From'
                    />
                    <label htmlFor='floatingInput'>From</label>
                  </div>
                  <div className='form-floating '>
                    <input
                      type='email'
                      className='form-control'
                      id='floatingInput1'
                      placeholder='To'
                    />
                    <label htmlFor='floatingInput1'>To</label>
                  </div>
                </div>
                <h5 className='sub-title'> Colors</h5>
                <div>
                  <ul className='colors ps-0'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h5 className='sub-title'> Sizes</h5>
                <div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-2'
                    />
                    <label className='form-check-label' htmlFor='color-2'>
                      M (2)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-1'
                    />
                    <label className='form-check-label' htmlFor='color-1'>
                      S (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div className='product-tags d-flex align-items-center flex-wrap gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Headphone
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Laptops
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Mobile
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Smartphone
                  </span>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Products</h3>
                <div>
                  <div className='random-products d-flex mb-3'>
                    <div className='w-50'>
                      <img
                        src='images/headphone.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>EarPods with 3.5mm Headphone Plug</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor='#ffd700'
                      />
                      <b>$100</b>
                    </div>
                  </div>
                  <div className='random-products d-flex '>
                    <div className='w-50'>
                      <img
                        src='images/headphone.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>EarPods with 3.5mm Headphone Plug</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor='#ffd700'
                      />
                      <b>$100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9 '>
              <div className='filter-sort-gird mb-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{ width: '100px' }}>
                      Sort By:
                    </p>
                    <select name='' id='' className='form-control'>
                      <option value='manual'>Featured</option>
                      <option value='best-selling'>Best Selling</option>
                      <option value='title-ascending'>
                        Alphabetically, A-Z
                      </option>
                      <option value='title-descending'>
                        Alphabetically, Z-A
                      </option>
                      <option value='price-ascending'>
                        Price, low to high
                      </option>
                      <option value='price-descending'>
                        Price, high to low
                      </option>
                      <option value='created-ascending'>
                        Date, old to new
                      </option>
                      <option value='created-descending'>
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div>
                    <div className='d-flex align-items-center gap-10'>
                      <p className='totalproduct mb-0'>21 Products</p>
                      <div className='d-flex align-items-center gap-10 grid'>
                        <img
                          onClick={() => {
                            setGrid(3);
                          }}
                          src='images/gr4.svg'
                          className='d-block image-fluid'
                          alt='grid'
                        />
                        <img
                          onClick={() => {
                            setGrid(4);
                          }}
                          src='images/gr3.svg'
                          className='d-block image-fluid'
                          alt='grid'
                        />
                        <img
                          onClick={() => {
                            setGrid(6);
                          }}
                          src='images/gr2.svg'
                          className='d-block image-fluid'
                          alt='grid'
                        />
                        <img
                          onClick={() => {
                            setGrid(12);
                          }}
                          src='images/gr.svg'
                          className='d-block image-fluid'
                          alt='grid'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='product-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <Productcard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstore;

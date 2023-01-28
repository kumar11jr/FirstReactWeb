import React from 'react'
import { NavLink } from 'react-router-dom';


const Both = (props) => {
  return (
    <>
      <section id='header' className='d-flex align-items-center p-6 my-lg-5 '>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-1 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.title}</h1>
                <h4 className='my-3'>
                  {props.desc}
                </h4>
                <h5 className='my-3'>
                    {props.line}
                </h5>
                <div className="mt-3">
                  <NavLink to={props.destination} className='btn btn-outline-primary'>{props.btn}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 mt-5 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt="homeimg" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Both;
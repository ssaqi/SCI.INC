import React from 'react'
import './Sign.css'
import IMG from '../Images/img1.jpeg'
import Form from './Form'
export default function Sign() {
  return (
    <>

      <div className="card mb-3" style={{ boxShadow: "none" }} >
        <div className="row g-0">
          <div className="col-md-3">
            <img src={IMG} className="img-fluid rounded-start img1 " alt="..." style={{ width: "320px", height: "auto" }} />
          </div>
          <div className="col-md-8">

            <div className="row g-2">

              <div className='container my-5' style={{ width: "600px" }}>

                <Form />

              </div>




            </div>


          </div>
        </div>
      </div>




    </>
  )
}

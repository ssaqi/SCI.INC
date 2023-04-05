import React from 'react';
import Login from './Login';
import IMG3 from '../Images/img3.jpeg';

export default function LoginImg() {
  return (
   
    <>
      <div className="card mb-3" style={{ boxShadow: "none" }} >
        <div className="row g-0">
          <div className="col-md-3" style={{width: "445px"}}>
            <img src={IMG3} className="img-fluid rounded-start img1" alt="..."  style={{width:"1600vh", height: 700}} />
          </div>
          <div className="col-md-8">

            <div className="row g-2">

              <div className='container my-5' style={{ width: "600px",  }}>

               <Login/>

              </div>




            </div>


          </div>
        </div>
      </div>

    </>

  )
}

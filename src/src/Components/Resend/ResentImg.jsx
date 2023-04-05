import React from 'react'
import '../Sign/Sign.css'
import IMG2 from '../Images/img2.jpeg'
import ResentLink from './ResentLink'
export default function Sign() {
  return (
    <>

      <div className="card mb-3" style={{ boxShadow: "none" }} >
        <div className="row g-0">
          <div className="col-md-3" style={{width: "445px"}}>
            <img src={IMG2} className="img-fluid rounded-start img1" alt="..."  style={{width:"1500vh", height: 700}} />
          </div>
          <div className="col-md-8">

            <div className="row g-2">

              <div className='container my-5' style={{ width: "600px",  }}>

               <ResentLink/>

              </div>




            </div>


          </div>
        </div>
      </div>




    </>
  )
}


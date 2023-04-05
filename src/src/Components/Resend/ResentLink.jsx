import React from 'react'
import TextField from '@mui/material/TextField';
import '../Sign/Sign.css'
import { Link } from 'react-router-dom'
export default function ResentLink() {
  return (
    <>
<div className="container my-5">
        <div className="row">

          <h1
            className="display-2 fw-bold text-dark text-loweruppercase"
            style={{ fontSize: 25 }}
          >
            Resent Password<br />
            <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>
                Please enter the email associated with your account</span>
          </h1>


          <form className="row g-3 ">
            <div className="col-auto">
             <label>Email</label>
             <br/>
              <TextField className='input'
                label=" Email  "
                variant="outlined"
                />
            </div>

            <p> Already have an account? <Link to='/login'> <span style={{ color: "#36bbf7  " }}>Sign in</span></Link></p>

            <div className="col-auto">
              <Link to='/resent'>
                <button type="submit" 
                className="btn btn-primary btn2 mb-3" 
                style={{ backgroundColor: "#36bbf7"}}>
                  Sign up
                </button>
                    </Link>
             


            </div>

          </form>



        </div>
      </div>


    </>
  )
}

import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Sign.css'
import { Checkbox } from '@mui/material';
import Google from '../Images/images.png'
import { Link } from 'react-router-dom'

export default function Form() {
  return (
    <>
      <div className="container my-1 ">
        <div className="row">
          <h1
            className="display-2 fw-bold text-dark text-loweruppercase"
            style={{ fontSize: 25 }}
          >
            Registration<br />
            <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>Enter the information to access all features</span>
          </h1>


          <form className="row g-3 form" method='POST'>
            <div className="col-auto">
            <label>First Name</label>
             <br/>
              <TextField className='input1'
                label="First Name  "
                variant="outlined"



              />
            </div>
            <div className="col-auto">
            <label>Last Name</label>
             <br/>
              <TextField className='input1'
                label="Last Name  "
                variant="outlined"

              />
            </div>
            <div className="col-auto">
            <label>Phone no</label>
             <br/>
              <TextField className='input1'
                label="Phone no"
                variant="outlined"

              />
            </div>
            <div className="col-auto">
            <label>Email</label>
             <br/>
              <TextField className='input1'
                label="Email  "
                variant="outlined"

              />
            </div>

            <div className="col-auto">
            <label>Password</label>
             <br/>
              <TextField className='input1'
                label="Password  "
                variant="outlined"

              />
            </div>
            <div className="col-auto">
            <label>Confirm Password</label>
             <br/>
              <TextField className='input1'
                label="Confirm Password "
                variant="outlined"

              />
            </div>



            <p> <Checkbox></Checkbox>Yes,I want to recive Spurce Cloud emails
              <br />
              <Checkbox></Checkbox>I agree all <span style={{ color: "#36bbf7  " }}>Term,Privacy Policy</span> and <span style={{ color: "#36bbf7" }}>Fees</span>
            </p>

            <div className="col-auto">
              <Link to='/resent'>
                <button type="submit" className="btn btn-primary btn1 mb-3" style={{ backgroundColor: "#36bbf7" }}>
                  Sign up
                </button></Link>
              <p>      _________________or_________________</p>


              <button type="submit" className="btn btn-secondery btn1 mb-3 text-loweruppercase">
                <img src={Google} style={{ width: "20px" }} /> Sign up with google
              </button>
            </div>

          </form>



        </div>
      </div>




    </>
  )
}

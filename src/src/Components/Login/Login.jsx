import React from 'react'
import TextField from '@mui/material/TextField';
import '../Sign/Sign.css'
import { Link } from 'react-router-dom'
import { Checkbox } from '@mui/material';
export default function Login() {
  return (
  
   <>
   <div className="container ">
        <div className="row">

          <h1
            className="display-2 fw-bold text-dark text-loweruppercase"
            style={{ fontSize: 25 }}
          >
              Hey, hello👋<br />
            <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>
                Enter the information you entered while registration {
                    
                }</span>
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
            <div className="col-auto">
             <label>Password</label>
             <br/>
              <TextField className='input'
                label="Password "
                variant="outlined"
                />
            </div>
            <p> <Checkbox></Checkbox> Remember Me 
                <Link to='#'> <span style={{ }} className='small'>   
                 Forgot Password
                </span></Link></p>

            <div className="col-auto">
              <Link to='/'>
                <button type="submit" 
                className="btn btn-primary btn3 mb-3" 
                style={{ backgroundColor: "#36bbf7"}}>
                  Sign in
                </button>
                </Link>
             


            </div>

          </form>



        </div>
      </div>
   
   </>

  )
}

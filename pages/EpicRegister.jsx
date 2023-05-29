import React from 'react';
import arcadeclub from '../assets/img/arcadeclub.gif';
import { Link } from 'react-router-dom';

const EpicRegister = () => {
  return (
    <div className='epic-register'>
        <div className="box">
       <div className="main-box">
       <div className="epic-logo">
       <div>
         
          <img 
          src={arcadeclub}
          width="200" 
          height="150"
          />
     </div>

    </div>

    <div>
        <h6 className='sign-title'>
            Sign Up
        </h6>
    </div>

    <div className="submit-form">
        <form>
        <div className="form-group mb-3">
              <input name="name" type="text" className="form-control email" placeholder="Country" required  />
        </div>
        <div className="form-group mb-3 mt-4 d-flex justify-content-between">


             <div className="col-6">
             <input name='password' type="password" className="form-control" placeholder="First Name"  required  />
             </div>

             <div className="col-6">
             <input name='password' type="password" className="form-control" placeholder="Last Name"  required  />
             </div>

             

             
        </div>
        <div className="form-group mb-3 mt-4">
              <input name="name" type="text" className="form-control email" placeholder="Display Name" required  />
        </div>
        <div className="form-group mb-3 mt-4">
              <input name="name" type="text" className="form-control email" placeholder="Email Adress" required  />
        </div>
        <div className="form-group mb-3 mt-4">
              <input name="name" type="text" className="form-control email" placeholder="Password" required  />
        </div>
        </form>
    </div>
    <div  className='mt-4 d-flex align-items-center justify-content-between'>
        <input type="checkbox" />
        <p className='t-1 ms-3'>I would like to receive news, surveys and special offers from Arcade Club.</p>
    </div>
    <div  className='mt-4 d-flex align-items-center'>
        <input type="checkbox" />
        <p className='t-1 ms-3'>I have read and agree to the <a href="" className='t-2'>terms of service</a></p>
    </div>
    <div className="form-group mb-3 mt-5">
              <button type="submit" className="btnSubmit">Continue</button>
            </div>
    <div  className=''>
       <a href="https://www.epicgames.com/site/en-US/privacypolicy?lang=en-US" target="_blank"> <p className='t-3'>Privacy Policy</p></a>
    </div>
    <div className='d-flex justify-content-center'>
        <p className='t-5'>Have an Arcade Club Account?</p>
        <Link to="/epic-sign-in" className='ms-1 t-4'>Sign In</Link>
    </div>
    <div className='d-flex justify-content-center'>
        <p className='t-5'>Back to </p>
        <Link to="/signin" className='ms-1 t-4'>all sign in options</Link>
    </div>
       </div>
        </div>
    </div>
  )
}

export default EpicRegister
import * as React from 'react';
import img3 from '../Images/reset.svg';
function Forgotpass()
{
    return(
        <>
        <div className=' container  m-5 row'>
            <img width="150px" src={img3} className='col-sm-6 col-lg-5' />
            <div className=' col-sm-5 col-lg-4 mx-auto m-5'><h5>Welcome !</h5>
            <br></br>
                <h1><b>Forgot Password ?</b></h1>
                <p>Lorem ipsum in simple</p>
                <form className='container '>
                    <div className='mb-3'>
                    <div class="form-check">
                            {/* <input class="form-check-input" type="radio" id="user" value="User"/> */}
                            <label class="form-check-label" htmlFor="user">
                                {/* User */}
                            </label>
                            </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="forgot-password" className='form-label'>Username</label>
                        <input type="text" className='form-control' />
                    </div>
                    {/* <div>
                    <label>
                      <input type="checkbox" />Remembered Me</label>
                      <label className='float-end'>Forgot Password</label>
                  </div> */}
                  <br></br>
                    <div className='mb-3'>
                        <button type="submit" className='btn btn-dark w-100' >Login</button>
                    </div>
                    <p className='text-center'>Already have an Account ?<b>Login</b></p>
                </form>
            </div>
        </div>
        </>
    )
}
export default Forgotpass;